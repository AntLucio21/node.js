const {validationResult } = require('express-validator');

module.exports.formulario_inclusao_noticia = function(app, rep, res) {
    res.render('admin/form_add_noticia.ejs')
}

module.exports.noticias_salvar = function(app, req, res) {
    var noticia = req.body;
    const errors = validationResult(req);
    
    if (errors) {
    if (!errors.isEmpty()) {
z
        return res.render('admin/form_add_noticia', {errors: errors.array()});
        
    }}
    var connection = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModels; //esse primeiro 'app' seria a aplicação em geral

    noticiasModel.salvarNoticia(noticia, connection, function(error, result){
        
        res.redirect('/noticias');
})
}