const config = require('../config/database');
const sql = require('mssql');

config.connectToDb();

  //회원가입
  module.exports.registerUser = async(req, res) => {
    const { id , pw , name , tel , email} = req.body;

    let sqlQuery = `INSERT INTO MEM(MEM_NO, MEM_ID,MEM_NM, MEM_PWD,MEM_TEL,JOIN_DTM,MEM_EMAIL) 
    VALUES((SELECT MAX(MEM_NO) FROM MEM)+1, @id, @name, @pw, @tel, SYSDATETIME(), @email)`;
    
    try{
      const request = config.pool.request();
      request.input('email',sql.VarChar(100),email);
      request.input('id',sql.VarChar(100),id);
      request.input('pw',sql.VarChar(100),pw);
      request.input('name',sql.VarChar(100),name);
      request.input('tel',sql.VarChar(15),tel);
      await request.query(sqlQuery);
    }catch(err){
      throw new Error('Database query failed '+ err.message);
    }
      
  };

   //로그인 시 id, pw 확인
   module.exports.loginCheck = async (req, res) => {
    const { id, pw } = req.body;

    let sqlQuery = `SELECT count(*) as count FROM MEM WHERE MEM_ID = @id AND MEM_PWD = @pw`;
    
    try{
      const request = config.pool.request();
      request.input('id',sql.VarChar(100),id);
      request.input('pw',sql.VarChar(100),pw);

      const result = await request.query(sqlQuery);

      return result.recordset[0].count;
    } catch (err) {
      throw new Error('Database query failed '+ err.message);
    }
};

//id 중복확인
module.exports.checkIdDup = async(req, res) => {
  const {id} = req.body;

  let sqlQuery = `SELECT count(*) as count FROM MEM WHERE MEM_ID = @id`;

  try{
    const request = config.pool.request();
    request.input('id',sql.VarChar(100),id);
    const result = await request.query(sqlQuery);
    return result.recordset[0].count;
  }catch(err){
    throw new Error('Database query failed'+err.message);
  }
};

