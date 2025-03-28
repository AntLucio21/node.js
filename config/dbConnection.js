var mysql = require('mysql');

var comMySQL = function(){
        return mysql.createConnection({
            host : 'localhost',
            user : 'admin',
            password : '1234',
            database : 'portal_noticias'
        });
    }

module.exports = function () {
    console.log('O autoload carregou o módulo de conexão com BD')
    return comMySQL;
}

