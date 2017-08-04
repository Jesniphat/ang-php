let express = require('express');
let router = express.Router();

let Promise = require('bluebird');
let uuidv1 = require('uuid/v1');
let conn = require('../library/config');
let gencode = require('../library/gencode')
let db = require('../library/db');

router.use(function (req, res, next) {
  // console.log("perrmission : ", permission.readToken(req));
  if (permission.isLogin(req)) {
    next();
  } else {
    res.json({
      status: true,
      nologin: true,
      error: "Access Denied"
    });
  }
});

router.post("/product_list",(req, res, next) => {
  let connection = conn.init();
  let product = req.body;
  let $scope;

  let product_list = function(){
    return new Promise((resolve, reject) => {
      let gets = {
        fields: [
          "p.*",
          "max(pp.productpic_path) as img"
        ],
        table: "product p left join product_pic pp on p.id = pp.product_id and pp.cover = 'Y'",
        where: {
          "p.status" : "Y"
        },
        group: "p.id"
      }
      db.SelectAll(connection, gets, (data) => {
          resolve(data);
        }, (error) => {
          console.log(error);
          reject(error);
        });
    });
  }

  product_list()
  .then(($data) => {
    res.json({
      status: true,
      data: $data
    });
  })
  .catch(($error) => {
    res.json({
      status: false,
      error: $error
    });
  });
    
});


router.post("/getproductbyid", (req, res, next) => {
  let connection = conn.init();
  let product = req.body;
  let $scope;
  let product_data = {};

  let get_product = function($id){
    return new Promise((resolve, reject) => {
      let get = {
        table: "product",
        where: {
          id: $id
        }
      };
      db.SelectRow(connection, get, (data) => {
        product_data = data;
        resolve(data.id);
      },(error) => {
        console.log(error);
        reject("error");
      });
    });
  }

  let get_product_pic = function($data){
    // console.log("$data = ", $data);
    return new Promise((resolve, reject) => {
      let gets = {
        table: "product_pic",
        where: {
          product_id: $data,
          status: "Y"
        }
      }
      db.SelectAll(connection, gets, (data) => {
        product_data.pic = data;
        resolve("success");
      },(errer) => {
        console.log(error);
        reject(error);
      });
    });
    
  }

    get_product(product.product_id)
    .then(get_product_pic)
    .then(function($d){
      // console.log("$d = ", $d);
      res.json({
        status: true,
        data: product_data
      });
    }).catch(function($e){
      res.json({
        status: false,
        error: $e
      });
    });
    
  }
)

router.post("/saveproduct", (req, res, next) => {
  let connection = conn.init();
  console.log("save product = ", req.body);
  let product = req.body;
  let product_id = "";
  let product_code = "";

  let beginTransection = function(){
    return new Promise((resolve, reject) => {
      db.BeginTransaction(connection, success => resolve(success), errors => reject(errors));
    });
  }

  let saveProduct = function(){
    return new Promise((resolve, reject) => {
      if(product.id == "create"){
        gencode.Code(connection, "product", "code", "P", 5, 1,(max_code) => {
          product_code = max_code;
          let insert = {
            table: "product",
            query: {
              code: product_code,
              product_name: product.name,
              product_description: product.desc,
              product_price: product.price,
              product_qty: product.qty,
              created_by: product.staffid,
              category_id: product.category,
              uuid: uuidv1()
            }
          }
          let insertProduct = db.Insert(connection, insert, results => resolve(results.insert_id), errors => reject(errors));
        },(error) => {
          reject(error);
        });
      } else {
        let update = {
          table: "product",
          query: {
            product_name: product.name,
              product_description: product.desc,
              product_price: product.price,
              product_qty: product.qty,
              created_by: product.staffid,
              category_id: product.category
          },
          where: { id: product.id }
        }
        let updateProduct = db.Update(connection, update, results => resolve(product.id), error => reject(error));
      }
    });
  }

  let picManage = function(product_id) {
    return new Promise((resolve, reject) => {
      if(product.pic_id){
        let update = {
          table: 'product_pic',
          query: { status: 'N' },
          where: { id: product_id }
        }
        let nPic = db.Update(connection, update, (success) => {
          let updatePic = {
            table: 'product_pic',
            query: { product_id: product_id, status: 'Y' },
            where: " id IN (" + (product.pic_id).toString() + ")"
          }
          let aPic = db.Update(connection, updatePic, success => resolve(product_id), errors => reject(errors));
        }, errors => reject(errors));
      } else {
        let update = {
          table: 'product_pic',
          query: {
            status: 'N',
            cover: 'N'
          },
          where: { product_id: product_id }
        }
        let updatePicData = db.Update(connection, update, success => resolve(product_id), errors => reject(errors));
      }
    });
  }

  let recommendProduct = function(product_id) {
    return new Promise((resolve, reject) => {
      if(product.recommend == true){
        if(product.id == "create"){
          let query = {
            table: "product",
            fields: ['id'],
            where: { recommend: 'Y' },
            oredr: rec_row
          }
          db.SelectAll(connection, query, (success) => {
            let recommend_list = [];
            let recs = [];
            for(let k = 0; k < success.length; k++){
              recs.push(success[k].id);
            }
            let checkId = recs.indexOf(product_id);
            for(let i = 0; i < success.length; i++){
              if(i == 0 && success.length == 3 && checkId == (-1)){
                continue;
              }
              recommend_list.push(success[i].id);
            }
            recommend_list.push(product_id);

            let updateNRecomment = {
              table: "product",
              query: { recommend: "N" },
              where: { recommend: "Y" }
            }
            db.Update(connection, updateNRecomment, (success) => {
              for(let j = 0; j < recommend_list.length; j++){
                let updateRecomment = {
                  table: product,
                  query: { recommend: "Y", rec_row: j },
                  where: { id: recommend_list[j] }
                }
                db.Update(connection, updateRecomment, success => resolve(product_id), er => reject(er));
              }
            }, err => reject(err));
          }, errers => reject(errors));
        }
      } else {
        let updateRecomment = {
          table: "product",
          query: { recommend: "N", rec_row: "0" },
          where: { id: product_id }
        }
        db.Update(connection, updateRecomment, success => resolve(product_id), errors => reject(errors));
      }
    });
  }

  let setCover = function(product_id){
    return new Promise((resolve, reject) => {
      if(product.coverId != '0'){
        let updateNCover = {
          table: "product_pic",
          query: { cover: "N"},
          where: { product_id: product_id }
        }
        db.Update(connection, updateNCover, (success) => {
          let updateCover = {
            table: "product_pic",
            query: { cover: "Y" },
            where: { id: product.coverId }
          }
          db.Update(connection, updateCover, success => resolve(product_id), error => reject(error));
        }, errors => reject(errors));
      } else {
        resolve(product_id);
      }
    });
  }

  beginTransection()
  .then(saveProduct)
  .then(picManage)
  .then(recommendProduct)
  .then(setCover)
  .then((product_id) => {
    return new Promise((resolve, reject) => {
      db.Commit(connection, (success) => {
        console.log("commited !!");
				res.json({
					status: true,
					data: success
				});
        resolve(success);
      }, errors => reject(errors));
    });
  }).catch((errors) => {
    console.log("Roll back error is", errors);
		db.Rollback(connection,(roll) => {
			res.json({
				status: false,
				error: errors
			});
		});
  });
  
});

module.exports = router;