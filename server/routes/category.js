var express = require('express');
var uuidv1 = require('uuid/v1');
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

router.post("/category_list", function(req, res, next){
	let category = req.body;
	let sql = "SELECT id, cate_name, cate_description, '' as product_qty FROM category WHERE status = 'Y'";
	let where = [];
	db.SelectAll(sql, where, 
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
	let sql = "SELECT * FROM category WHERE id = ?";
	let where = [category.cate_id];
	db.SelectRow(sql, where, 
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
	let category = req.body;
	let sql = "";
	let data = [];
	if(category.cateId != "create"){
		console.log("update");
		sql = "UPDATE category SET cate_name = ?, cate_description = ?, status = ? WHERE id = ?";
		data = [category.cateName, category.cateDescription, category.selectedStatus, category.cateId];
		db.Insert(sql, data, 
			(success) => {
				res.json({
					status: true,
					data: success
				});
			}, (error) => {
				res.json({
					status: false,
					error: error
				});
			});
	} else {
		console.log("insert");
		data = {
			cate_name: category.cateName,
			cate_description: category.cateDescription,
			status: category.selectedStatus,
			created_by: permission.getID(req),
			updated_by: permission.getID(req),
			uuid: uuidv1()
		};
		sql = "INSERT INTO category SET ? ";
		db.Insert(sql, data, 
			(success) => {
				res.json({
					status: true,
					data: success
				});
			}, (error) => {
				res.json({
					status: false,
					error: error
				});
			});
	}
});

module.exports = router;