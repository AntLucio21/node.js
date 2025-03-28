module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render('admin/form_add_noticia.ejs')
    })
    
    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        // res.send(`titulo da notícia: ${noticias.Titulo} <br> descrição: ${noticias.noticia}`); //printa essa mensaagem com os valores digitado no formulario
        // res.send(noticias); aqui ele retorna na pagina os valores em formato de array

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModels; //esse primeiro 'app' seria a aplicação em geral

        noticiasModel.salvarNoticia(noticia, connection, function(error, result){
            res.redirect('/noticias');
    })
})
}