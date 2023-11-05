const mysql = require('mysql');
const config = require("./config.json");



const db = new mysql.createConnection({
    host: config.DB.host,
    password: config.DB.password,
    user: config.DB.user,
    database: config.DB.database,
})


db.connect(function (err) {
    if (err) throw err;
        console.log(`Connection à la database ${config.DB.database} réussi !`)
})
module.exports = db