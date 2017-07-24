var express = require('express');
var router = express.Router();
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
    let sql = "select p.*,max(pp.productpic_path) as img "
            + "from product p left join product_pic pp on p.id = pp.product_id and pp.cover = 'Y' "
            + "where p.status = 'Y' group by p.id ";
    let where = [];
    db.SelectAll(sql, where,
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

module.exports = router;