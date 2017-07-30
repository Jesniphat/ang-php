let promise = require('bluebird');
let db = require('./db');

module.exports = new function() {
  this.Code = function(table, fld, prefix, size, start, callback_success, callback_error){
    let where = " 1 = 1 ";
    if (prefix != '') {
        where += " AND `" + fld + "` LIKE '" + $prefix + "%'";
    }
    let sql = {
      table: "'" + table + "'",
      fields: "max(`" + fld + "`) as maxCode",
      where: where
    };
    let next = "";
    let maxCode = db.SelectRow(sql, (result)=>{
      if(result.maxCode){
        next = parseInt(maxCode.substr(prefix.length)) + 1;
      }else{
        next = start + 0;
      }
    }, (error)=>{
      callback_error(error);
    });

    callback_success(prefix + substr('0000000000000' + next, -size));
  }
}