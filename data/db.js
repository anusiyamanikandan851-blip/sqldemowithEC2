const mysql = require("mysql2");
const connection = mysql.createConnection({
    host :"localhost",
    user : "root",
    password : "anu9342778668",
    database : "demo_kec"
});
connection.connect((err)=>{
    if(err){
        console.error('Error connecting to the database:', err);
    }
    else {
        console.log('Database connected successfully!');
    }
});
module.exports = connection;
