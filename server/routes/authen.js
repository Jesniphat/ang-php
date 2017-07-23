let express = require('express');
let router = express.Router();
let md5 = require('md5');
let db = require('../library/db');

router.post('/checklogin', function(req, res, next){
  // console.log("check login");
  let isLogin = permission.isLogin(req);
  
  res.json({
    status: true,
    data: isLogin
  });
});

router.post("/clearlogin", function(req, res, next){
  permission.clearToken(res);
  // console.log("permission : ", permission.readToken(req));
  res.json({
    status: true,
    data: "set0"
  });
});

router.post("/login", function(req, res, next) {
  let login = req.body;
  let where = [login.user, md5(login.password)];
  db.SelectRow("select * from staff where user = ? and password = ?", where, 
  (data) => {
    let id = data.id;
    if(id != 0 || id != "0"){
      permission.writeToken(res, id);
      console.log(permission.readToken(req));
      res.json({
        status: true,
        data: {
          id: data.id, 
          display_name:data.name, 
          last_name: data.lastname,
          login_name: data.user, 
          password: data.password
        }
      });
    }
  },(error) => {
    console.log("Error is ", error);
    res.json({
      status: false,
      error: error
    });
  });
});

module.exports = router;