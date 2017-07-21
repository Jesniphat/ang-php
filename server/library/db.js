let promise = require('bluebird');
let conn = require('./config');

module.exports = new function() {

  this.select = function(sql, data, success, errors){
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
      connection.end();
      return deferred.promise;
    }

    isArray()
    .then(select_data)
    .then(function(){
      success($scrope);
    }).catch(function(e){
      console.log("error = ", e);
      errors(e);
    });

  }

  this.insert = function(sql, data, success, errors){
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
        connection.query(sql, data, function(error, results, fields) {
          if (error) {
            return connection.rollback(function() {
              deferred.reject(error);
            });
          }
          $scrope = {insert_id:result.insertId, effected_row:result.affectedRows, change_row:result.changedRows };
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
      connection.end();
      return deferred.promise;
    }

    isObject()
    .then(insert_data)
    .then(function(){
      success($scrope);
    }).catch(function(ee){
      console.log("error = ", ee);
      errors(ee);
    });
  }


  this.update = function(sql, data, success, errors){
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
          $scrope = { effected_row:result.affectedRows, change_row:result.changedRows };
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
      connection.end();
      return deferred.promise;
    }

    isArray()
    .then(update_data)
    .then(function(){
      success($scrope);
    }).catch(function(ee){
      console.log("error = ", ee);
      errors(ee);
    });
  }

  this.delete = function(sql, success, errors){
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
          $scrope = { effected_row:result.affectedRows, change_row:result.changedRows };
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
      connection.end();
      return deferred.promise;
    }

    delete_data()
    .then(function(){
      success($scrope);
    }).catch(function(ee){
      console.log("error = ", ee);
      errors(ee);
    });
  }

}