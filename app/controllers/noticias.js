module.exports.noticias = function(app, req, res) {
    var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModels;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render('noticias/noticias', {noticias : result});
        });
}

module.exports.noticia = function(app, req, res) {
    var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModels;

        noticiasModel.getNoticia(connection, function(error, result){
            res.render('noticias/noticia', {noticia : result});
        });
}