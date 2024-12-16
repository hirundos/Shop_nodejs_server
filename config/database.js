const sql = require('mssql');

// SQL 접속 설정
const pool = new sql.ConnectionPool({
    user: 'dev01', 
    password: '1234', 
    server: 'localhost', 
    database: 'base', 
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
});

const connectToDb = async() => {
    try{
        await pool.connect();
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection failed:', err.message);
        throw err;
    }
};

// export
module.exports = {
    pool,
    connectToDb,
};