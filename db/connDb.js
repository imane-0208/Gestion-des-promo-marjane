const mysql = require("mysql2");

const dbConn =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'ayoub',
    database: 'gestion_promo_marjane'
});

dbConn.connect(function(err){
    if(err) throw err;
    console.log("database connected successfully !");
});

module.exports = dbConn;