const mysql = require('mysql2');

const pool = mysql.createPool({
  host:"localhost",
  user: "root",
  port: 3306,
  // password: "2708200315tT@",
  database: 'CCI',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


// pool.promise().query('select * from aluno')
// .then( (result) => {
//   console.log(result)
// })

module.exports = pool
