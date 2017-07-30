let promise = require('bluebird');
let conn = require('./config');

module.exports = new function() {

  this.SelectRow = function(data, success, errors){
    let connection = conn.init();
    let $scrope;
    
    let select_data = function(){
      let deferred = promise.pending();

      let fields = " * ";
      let where = " 1 = 1 ";
      let group = "";
      let order = "";
      let limit = "";
      
      if(typeof(data.where) == "object"){
        for(keys in data.where){
          where += " AND " + keys + " = '" + data.where[keys] + "'";
        }
      }else if (data.where != undefined){
        where += " AND " + data.where;
      }
      fields = (Array.isArray(data.fields)) ? (data.fields).toString() : (data.fields != undefined) ? data.fields : " * ";
      group  = (Array.isArray(data.group)) ? " GROUP BY " + (data.group).toString() : (data.group != undefined) ? " GROUP BY " + data.group : "";
      order  = (Array.isArray(data.order)) ? " ORDER BY " + (data.order).toString() : (data.order != undefined) ? " ORDER BY " + data.order : "";
      limit  = (data.limit != undefined) ? " LIMIT " + data.limit : "";

      let select = "SELECT " + fields + " FROM " + data.table + " WHERE " + where + order + limit;
      // console.log("select data = ", select);
      connection.query(select, function(error, results, fields){
        if(error){
          console.log("error : ", error);
          deferred.reject(error.message);
        }else if(results.length == 0) {
          console.log("error : on data");
          deferred.reject("nodata");
        }else {
          $scrope = results;
          deferred.resolve(results);
        }
      });
      return deferred.promise;
    }

    select_data()
    .then(function(){
      connection.end();
      success($scrope[0]);
    }).catch(function(e){
      connection.end();
      console.log("error = ", e);
      errors(e);
    });
  }

  this.SelectAll = function(data, success, errors){
    let connection = conn.init();
    let $scrope;
    
    let select_data = function(){
      let deferred = promise.pending();

      let fields = " * ";
      let where = " 1 = 1 ";
      let group = "";
      let order = "";
      let limit = "";

      if(typeof(data.where) == "object"){
        for(keys in data.where){
          where += " AND " + keys + " = '" + data.where[keys] + "'";
        }
      }else if (data.where != undefined){
        where += " AND " + data.where;
      }
      fields = (Array.isArray(data.fields)) ? (data.fields).toString() : (data.fields != undefined) ? data.fields : " * ";
      group  = (Array.isArray(data.group)) ? " GROUP BY " + (data.group).toString() : (data.group != undefined) ? " GROUP BY " + data.group : "";
      order  = (Array.isArray(data.order)) ? " ORDER BY " + (data.order).toString() : (data.order != undefined) ? " ORDER BY " + data.order : "";
      limit  = (data.limit != undefined) ? " LIMIT " + data.limit : "";

      let select = "SELECT " + fields + " FROM " + data.table + " WHERE " + where + group + order + limit;
      // console.log("select data = ", select);
      connection.query(select, function(error, results, fields){
        if(error){
          console.log("error : ", error);
          deferred.reject(error.message);
        }else if(results.length == 0) {
          console.log("error : on data");
          deferred.reject("nodata");
        }else {
          $scrope = results;
          deferred.resolve(results);
        }
      });
      return deferred.promise;
    }

    select_data()
    .then(function(){
      connection.end();
      success($scrope);
    }).catch(function(e){
      connection.end();
      console.log("error = ", e);
      errors(e);
    });

  }

  // this.Insert = function(data, success, errors){
  //   let connection = conn.init();
  //   let $scrope;

  //   let isObject = function(){
  //     let deferred = promise.pending();
  //     if(typeof(data) == "object"){
  //       deferred.resolve("continued");
  //     } else {
  //       deferred.reject("Is not object");
  //     }
  //     return deferred.promise;
  //   }

  //   let insert_data = function(){
  //     let deferred = promise.pending();
  //     let insert = "INSERT INTO " + data.table + " SET ? ";
  //     connection.beginTransaction(function(err) {
  //       if (err) { deferred.reject(err); }
  //       var querys = connection.query(insert, data.query, function(error, results, fields) {
  //         // console.log(querys.sql);
  //         if (error) {
  //           return connection.rollback(function() {
  //             deferred.reject(error);
  //           });
  //         }
  //         $scrope = {insert_id:results.insertId, effected_row:results.affectedRows, change_row:results.changedRows };
  //         connection.commit(function(e){
  //           if (e) {
  //             return connection.rollback(function(){
  //               deferred.reject(e);
  //             });
  //           }
  //           console.log("commit success");
  //           deferred.resolve("Update success");
  //         });
  //       });
  //     });
  //     return deferred.promise;
  //   }

  //   isObject()
  //   .then(insert_data)
  //   .then(function(){
  //     connection.end();
  //     success($scrope);
  //   }).catch(function(ee){
  //     connection.end();
  //     console.log("my error = ", ee);
  //     errors(ee);
  //   });
  // }


  // this.Update = function(data, success, errors){
  //   let connection = conn.init();
  //   let $scrope;
    
  //   let update_data = function(){
  //     let deferred = promise.pending();

  //     let fields = [];
  //     let set = [];
  //     let where = " WHERE 1 = 1 "; 
  //     for(keys in data.query){
  //       fields.push(keys + " = ?");
  //       set.push(data.query[keys]);
  //     }
  //     fields.toString();

  //     if(typeof(data.where) == "object"){
  //       for(keys in data.where){
  //         where += " AND " + keys + " = '?'";
  //         set.push(data.where[keys]);
  //       }
  //     }else if (data.where != undefined){
  //       where += " AND " + data.where;
  //     }
  //     let update = "UPDATE " + data.table + " SET " + fields + where;
  //     // console.log(update);
  //     connection.beginTransaction(function(err) {
  //       if (err) { deferred.reject(err); }
  //       connection.query(update, set, function(error, results, fields) {
  //         if (error) {
  //           return connection.rollback(function() {
  //             deferred.reject(error);
  //           });
  //         }
  //         $scrope = { effected_row:results.affectedRows, change_row:results.changedRows };
  //         connection.commit(function(e){
  //           if (e) {
  //             return connection.rollback(function(){
  //               deferred.reject(e);
  //             });
  //           }
  //           console.log("commit success");
  //           deferred.resolve("Update success");
  //         });
  //       });
  //     });
  //     return deferred.promise;
  //   }

  //   update_data()
  //   .then(function(){
  //     connection.end();
  //     success($scrope);
  //   }).catch(function(ee){
  //     connection.end();
  //     console.log("error = ", ee);
  //     errors(ee);
  //   });
  // }

  this.Delete = function(data, success, errors){
    let connection = conn.init();
    let $scrope;

    let delete_data = function(){
      let deferred = promise.pending();

      let where = " WHERE 1 = 1 ";
      if(typeof(data.where) == "object"){
        for(keys in data.where){
          where += " AND " + keys + " = '" + data.where[keys] + "'";
        }
      }else if (data.where != undefined){
        where += " AND " + data.where;
      }else{
        deferred.reject("You can't delete data by this query");
      }
      let query = "DELETE FROM " + data.table + where;
      // console.log(query);
      connection.beginTransaction(function(err) {
        if (err) { deferred.reject(err); }
        connection.query(query, function(error, results, fields) {
          if (error) {
            return connection.rollback(function() {
              deferred.reject(error);
            });
          }
          $scrope = { effected_row:results.affectedRows, change_row:results.changedRows };
          connection.commit(function(e){
            if (e) {
              return connection.rollback(function(){
                deferred.reject(e);
              });
            }
            console.log("commit success");
            deferred.resolve("Delete success");
          });
        });
      });
      return deferred.promise;
    }

    delete_data()
    .then(function(){
      connection.end();
      success($scrope);
    }).catch(function(ee){
      connection.end();
      console.log("error = ", ee);
      errors(ee);
    });
  }

  this.BeginTransaction = function(connection, success, errors){
    connection.beginTransaction((err) => {
      if (err) { 
        errors(err);
      } else {
        success("start transaction");
      }
    })
  }

  this.Commit = function(connection, success, errors){
    connection.commit(function(e){
      if (e) {
        errors(e);
      }else{
        // console.log("commit success");
        success("commit success");
      }
    });
  }

  this.Rollback = function(connection, roll){
    connection.rollback(function() {
     roll("rollback");
    });
  }

  this.Insert = function(connection, data, success, errors){
    let $scrope;
    let deferred = promise.pending();
    if(typeof(data) == "object"){
      
    } else {
      errors("Is not object");
      return;
    }

    let insert = "INSERT INTO " + data.table + " SET ? ";
    var querys = connection.query(insert, data.query, function(error, results, fields) {
      // console.log(querys.sql);
      if (error) {
        errors(error);
      } else {
        $scrope = {insert_id:results.insertId, effected_row:results.affectedRows, change_row:results.changedRows };
        console.log("INSERT SUCCESS = ", $scrope);
        success($scrope);
      }
    });
  }

  this.Update = function(connection, data, success, errors){
    let $scrope;
    let fields = [];
    let set = [];
    let where = " WHERE 1 = 1 "; 
    for(keys in data.query){
      fields.push(keys + " = ?");
      set.push(data.query[keys]);
    }
    fields.toString();

    if(typeof(data.where) == "object"){
      for(keys in data.where){
        where += " AND " + keys + " = '?'";
        set.push(data.where[keys]);
      }
    }else if (data.where != undefined){
      where += " AND " + data.where;
    }
    let update = "UPDATE " + data.table + " SET " + fields + where;
    // console.log(update);
    connection.query(update, set, function(error, results, fields) {
      if (error) {
        errors(error)
      } else {
        $scrope = { effected_row:results.affectedRows, change_row:results.changedRows };
        success($scrope);
      }
    });
  }

}