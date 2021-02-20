var mysql = require('mysql');

// Criação do servidor mysql e da função uso

var connMySQL = function(){
    
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'elopessoas'
    });
}

module.exports = function() {
    return connMySQL;
};
