let express = require('express');
let router = express.Router();
let db = require('../library/db');

router.post('/checklogin', function(req, res, next){
  // console.log("check login");
  let isLogin = permission.isLogin(req);
  
  res.json({
    status: true,
    data: isLogin
  });
});

module.exports = router;