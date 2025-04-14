// var dbConnection = require('../../config/dbConnection')

module.exports = function(app) {    
    app.get('/noticias', function(req, res){
        app.app.controllers.noticias.noticias(app, req, res);
    });

    app.get('/noticia', function(req, res){
        app.app.controllers.noticias.noticia(app, req, res);
    });
    //metodo de filtrar informação pelo titulo ou conteudo no caso, noticia
    // app.get('buscar-noticias', function(req, res){
    //     var termo = req.query.termo;
    //     var connection = app.config.dbConnection();
    //     var noticiasModel = app.app.models.noticiasModels;

    //     noticiasModel.buscarNoticias(termo, connection, function(error, result){
    //         if(error) {
    //             console.error('Erro ao buscar noticia:', error);
    //             return res.status(500).JSON({ erro: 'erro no servidor'});
    //         }
    //         res.render(result.json);
    //     });

        
    // })


};