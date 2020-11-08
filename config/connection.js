// Set up Node to mySQL connection
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3006,
    user: 'root',
    password: 'BCSds1826$!',
    database: 'burgers_db'
});

// Make connection
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;