const config = require('../config/database');
const sql = require('mssql');

  //상품 목록 출력
  module.exports.getProducts = async() => {
    var page = 0;
    var pageSize = 5;
    let start = 0;
    var end = 0; 

    if(page <= 0){
      page = 1;
    } else{
      start = (page - 1) * pageSize;
    }
    end = page * pageSize;

    let sqlQuery = "SELECT PROD_NO, PROD_NM, PROD_PRICE FROM PROD";
   
    try{
      const request = config.pool.request();
      const result = await request.query(sqlQuery);
      return result.recordset;
    } catch(err){
        throw new Error('Database query failed '+ err.message);
    } 
  };

