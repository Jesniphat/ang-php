var express = require('express');
var uuidv1 = require('uuid/v1');
let promise = require('bluebird');
let conn = require('../library/config');
var router = express.Router();

let db = require('../library/db');

router.use(function(req, res, next){
//   console.log("perrmission : ", permission.readToken(req));
  if(permission.isLogin(req)){
    next();
  }else {
    res.json({
      status:true,
      nologin: true,
      error: "Access Denied"
    });
  }
});

router.post("/category_list", (req, res, next) => {
	let category = req.body;
	// let sql = "SELECT id, cate_name, cate_description, '' as product_qty FROM category WHERE status = 'Y'";
	// let where = [];
	let gets = {
		fields: "id, cate_name, cate_description, '' as product_qty",
		table: "category",
		where: {
			status: "Y"
		}
	}
	db.SelectAll(gets, 
		(data) => {
			// console.log(data);
			res.json({
				status: true,
				data: data
			});
		},(error) => {
			console.log(error);
			res.json({
				status: false,
				error: error
			});
	});
});

router.post("/getcategorybyid", function(req, res, next) {
	// console.log(" get cate bt id ");
	let category = req.body;
	let where = {id:category.cate_id};
	let gets = {
		fields: ["*"],
		table:  "category",
		where:  where
	};
	db.SelectRow(gets, 
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
});

router.post("/savecategory", function(req, res, next) {
	let connection = conn.init();
	let category = req.body;
	let $scope = "";
	let transection = function(){
		console.log("transection");
		return new promise((resolve, reject) => {
			db.BeginTransaction(connection, (success) => {
				resolve(success)
			}, (error) => {
				reject(error);
			});
		});
	}

	let savecetegory = function(){
		return new promise((resolve, reject) => {
			if(category.cateId != "create"){
				let data = {
					query: {
						cate_name: category.cateName,
						cate_description: category.cateDescription,
						status: category.selectedStatus
					},
					table: "category",
					where: {
						id: category.cateId
					}
				};
				db.Update(connection, data, (success) => {
					// console.log("Update categort success = ", success);
					resolve(success);
					$scope = success;
				}, (error) => {
					// console.log("Error Update Category = ", error);
					reject(error);
				});
			} else {
				console.log("insert");
				data = {
					query:{
						cate_name: category.cateName,
						cate_description: category.cateDescription,
						status: category.selectedStatus,
						created_by: permission.getID(req),
						updated_by: permission.getID(req),
						uuid: uuidv1()
					},
					table: "category"
				};
				// sql = "INSERT INTO category SET ? ";
				db.Insert(connection,data, (success) => {
					// console.log("Insert Category success = ", success);
					$scope = success;
					resolve(success);
				}, (error) => {
					// console.log("Noooooooooooooo!!! Insert Category Error !!! = ", error);
					reject(error);
				});
			}
		});
	}


	transection()
	.then(savecetegory)
	.then(function(){
		return new promise((resolve, reject) => {
			db.Commit(connection, (success) => {
				console.log("commited !!");
				res.json({
					status: true,
					data: $scope
				});
				resolve("commited");
			}, (error) => {
				reject(error);
			});
		});
	}).catch(function(e){
		console.log("Roll back error is", e);
		db.Rollback(connection,(roll) => {
			res.json({
				status: false,
				error: e
			});
		});
	});
	
});

module.exports = router;