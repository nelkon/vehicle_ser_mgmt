const mysql = require('mysql');


const dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'password',
    database : 'service_mgmt_sys'
});

dbConn.connect(function(error){
    if(error){
        throw error;

    } else{
        console.log('Database connected Successfully');

    }
    
})

module.exports = dbConn;