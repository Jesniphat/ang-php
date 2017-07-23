var express = require('express');
var router = express.Router();
let db = require('../library/db');


router.use(function(req, res, next){
  // console.log("perrmission : ", permission.readToken(req));
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

router.post("/ping", function(req, res, next){
  res.json({
      status:true,
      data:'1'
    });
});

module.exports = router;
