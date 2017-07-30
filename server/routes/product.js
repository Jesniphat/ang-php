let express = require('express');
let router = express.Router();
let promise = require('bluebird');
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

router.post("/product_list",
  (req, res, next) => {
    let product = req.body;
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
    db.SelectAll(gets,
      (data) => {
        res.json({
          status: true,
          data: data
        });
      }, (error) => {
        console.log(error);
        res.json({
          status: false,
          error: error
        });
      });
  }
);


router.post("/getproductbyid", (req, res, next) => {
  let product = req.body;
  let product_data = {};

  let get_product = function(){
    let deferred = promise.pending();
    let get = {
      table: "product",
      where: {
        id: product.product_id
      }
    };
    db.SelectRow(get, (data) => {
      product_data = data;
      // console.log("Product = ", product_data);
      deferred.resolve("success");
    },(error) => {
      console.log(error);
      deferred.reject("error");
    });

    return deferred.promise;
  }

  let get_product_pic = function(){
    let deferred = promise.pending();
    let gets = {
      table: "product_pic",
      where: {
        product_id: product.product_id,
        status: "Y"
      }
    }
    db.SelectAll(gets, (data) => {
      product_data.pic = data;
      // console.log("Product Pic = ", product_data);
      deferred.resolve("success");
    },(errer) => {
      console.log(error);
      deferred.reject("error");
    });
    return deferred.promise;
  }

    get_product()
    .then(get_product_pic)
    .then(function(){
      res.json({
        status: true,
        data: product_data
      });
    }).catch(function(e){
      console.log(e);
      res.json({
        status: false,
        error: e
      });
    });
    
  }
)

router.post("/saveproduct", (req, res, next) => {
  console.log("save product = ", req.body);
  let product = req.body;
  let product_id = "";
  let product_code = "";

  let save_product = function(){
    let deferred = promise.pending();
    if(product.id == "create"){
      gencode.Code("product", "code", "P", 5, 1,(max_code) => {
        product_code = max_code;
        let insert = {
          table: "product",
          query: {
            code: product_code,
            product_name: product.name,
            product_description: product.desc
          }
        }
      },(errer) => {});
    }
  }
  
});

module.exports = router;