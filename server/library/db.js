let promise = require('bluebird');
let conn = require('./config');

module.exports = new function() {

  this.SelectRow = function(sql, data, success, errors){
    let connection = conn.init();
    let $scrope;

    let isArray = function(){
      let deferred = promise.pending();
      if(Array.isArray(data)){
        deferred.resolve("continued");
      } else {
        deferred.reject("Is not object");
      }
      return deferred.promise;
    }

    let select_data = function(){
      let deferred = promise.pending();
      connection.query(sql, data, function(error, results, fields){
        if(error){
          console.log("error : ", error);
          deferred.reject(error.message);
        }else {
          $scrope = results;
          deferred.resolve(results);
        }
      });
      return deferred.promise;
    }

    isArray()
    .then(select_data)
    .then(function(){
      connection.end();
      success($scrope[0]);
    }).catch(function(e){
      connection.end();
      console.log("error = ", e);
      errors(e);
    });
  }

  this.SelectAll = function(sql, data, success, errors){
    let connection = conn.init();
    let $scrope;

    let isArray = function(){
      let deferred = promise.pending();
      if(Array.isArray(data)){
        deferred.resolve("continued");
      } else {
        deferred.reject("Is not object");
      }
      return deferred.promise;
    }

    let select_data = function(){
      let deferred = promise.pending();
      connection.query(sql, data, function(error, results, fields){
        if(error){
          console.log("error : ", error);
          deferred.reject(error.message);
        }else {
          $scrope = results;
          deferred.resolve(results);
        }
      });
      return deferred.promise;
    }

    isArray()
    .then(select_data)
    .then(function(){
      connection.end();
      success($scrope);
    }).catch(function(e){
      connection.end();
      console.log("error = ", e);
      errors(e);
    });

  }

  this.Insert = function(sql, data, success, errors){
    let connection = conn.init();
    let $scrope;

    let isObject = function(){
      let deferred = promise.pending();
      if(typeof(data) == "object"){
        deferred.resolve("continued");
      } else {
        deferred.reject("Is not object");
      }
      return deferred.promise;
    }

    let insert_data = function(){
      let deferred = promise.pending();
      connection.beginTransaction(function(err) {
        if (err) { deferred.reject(err); }
        var querys = connection.query(sql, data, function(error, results, fields) {
          console.log(querys.sql);
          if (error) {
            return connection.rollback(function() {
              deferred.reject(error);
            });
          }
          $scrope = {insert_id:results.insertId, effected_row:results.affectedRows, change_row:results.changedRows };
          connection.commit(function(e){
            if (e) {
              return connection.rollback(function(){
                deferred.reject(e);
              });
            }
            console.log("commit success");
            deferred.resolve("Insert success");
          });
        });
      });
      return deferred.promise;
    }

    isObject()
    .then(insert_data)
    .then(function(){
      connection.end();
      success($scrope);
    }).catch(function(ee){
      connection.end();
      console.log("my error = ", ee);
      errors(ee);
    });
  }


  this.Update = function(sql, data, success, errors){
    let connection = conn.init();
    let $scrope;

    let isArray = function(){
      let deferred = promise.pending();
      if(Array.isArray(data)){
        deferred.resolve("continued");
      } else {
        deferred.reject("Is not object");
      }
      return deferred.promise;
    }

    let update_data = function(){
      let deferred = promise.pending();
      connection.beginTransaction(function(err) {
        if (err) { deferred.reject(err); }
        connection.query(sql, data, function(error, results, fields) {
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
            deferred.resolve("Update success");
          });
        });
      });
      return deferred.promise;
    }

    isArray()
    .then(update_data)
    .then(function(){
      connection.end();
      success($scrope);
    }).catch(function(ee){
      connection.end();
      console.log("error = ", ee);
      errors(ee);
    });
  }

  this.Delete = function(sql, success, errors){
    let connection = conn.init();
    let $scrope;

    let delete_data = function(){
      let deferred = promise.pending();
      connection.beginTransaction(function(err) {
        if (err) { deferred.reject(err); }
        connection.query(sql, function(error, results, fields) {
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

}