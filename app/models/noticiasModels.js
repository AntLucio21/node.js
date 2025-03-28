//aqui exporta os meus métodos

module.exports = function() {


//  esse método lista as noticias na view noticias
    this.getNoticias = function(connection, callback){
        connection.query('select * from noticias', callback);
    }
// esse método filtra uma noticia que nesse caso foi manual então foi o do id 2 que esta na DB
    this.getNoticia = function(connection, callback) {
        connection.query('select * from noticias where id_noticia = 2', callback);
    }
// esse daqui faz por via de método post para adicionar uma noticia no DB
    this.salvarNoticia = function(noticia, connection, callback) {
        // connection.query(`insert into noticias (titulo, noticia) values (${noticias.Titulo}, ${noticias.noticia})`); // dessa forma não da certo
        connection.query('insert into noticias set ?',noticia, callback);
    }
// esse daqui é experimental ainda, na teoria ela deve receber o valor passado no paramentro do input da view que pedi para filtrar e encontrar uma noticia especifica ao vivo
    this.buscarNoticias = function(termo, connection, callback){
        let sql = 'select * from noticias where titulo like ? or noticia like ?';
        // connection.query('select * from noticias where titulo like ? or noticia like ?',termo, callback);

        
        connection.query(sql, [`%${termo}%`,`%${termo}%`], callback);

    }

    return this;
}