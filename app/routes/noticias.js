// var dbConnection = require('../../config/dbConnection')

module.exports = function(app) {    
    app.get('/noticias', function(req, res){
    
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModels;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render('noticias/noticias', {noticias : result});
        });

    });

    //metodo de filtrar informação pelo titulo ou conteudo no caso, noticia
    app.get('buscar-noticias', function(req, res){
        var termo = req.query.termo;
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModels;

        noticiasModel.buscarNoticias(termo, connection, function(error, result){
            if(error) {
                console.error('Erro ao buscar noticia:', error);
                return res.status(500).JSON({ erro: 'erro no servidor'});
            }
            res.JSON(result);
        });

        
    })


};