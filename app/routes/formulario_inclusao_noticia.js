const { body, validationResult } = require('express-validator');

// var a = require('../views/admin/form_inclusao_noticia')
module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render('admin/form_add_noticia.ejs')
    })
    
    app.post('/noticias/salvar', [

        // aqui é feito a verificação dos dados. Se eles foram preechidos no ejs, se caso nçao tiverem sido preenchidos da mesnagem de erro.
        // pode ser feito também usando o check no lugar do body
        
        body('titulo').notEmpty().withMessage('O titulo é obrigatório!'),
        body('resumo').notEmpty().withMessage('O resumo é obrigatório!'),
        body('autor').notEmpty().withMessage('O Autor é obrigatório!'),
        body('data_noticia').isDate().withMessage('Data inválida. Use o formato DD-MM-YYYY!'),
        body('noticia').notEmpty().withMessage('A descrição é obrigatório!')
    ],function(req, res){

        // [body('titulo').notEmpty().withMessage('O titulo é obrigatório!')], //coloca isso antes da function dentro do parentesis app.post


        // body('noticia').isLength({min: 10}).withMessage('O conteudo deve ter pelo menos 10 caracteres'),
        var noticia = req.body;
        
        // req.assert('titulo', 'Título é obrigatório').notEmpty();
        // req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        // req.assert('autor', 'O autor é obrigatório').notEmpty();
        // req.assert('data_noticia', 'Data é obrigatório').notEmpty();
        // req.assert('noticia', 'Noticia é obrigatório').notEmpty();
        
        const errors = validationResult(req);
        
        if (errors) {
        if (!errors.isEmpty()) {
            // res.render('admin/form_add_noticia');
            // return res.status(400).json({ erros: erros.array() });
            return res.render('admin/form_add_noticia', {errors: errors.array()});
            
        }}
        // res.send("Notícia adicionada com sucesso!");
        // res.send('Noticia adicionada com sucesso!')
        // res.send(`titulo da notícia: ${noticias.Titulo} <br> descrição: ${noticias.noticia}`); //printa essa mensaagem com os valores digitado no formulario
        // res.send(noticias); aqui ele retorna na pagina os valores em formato de array

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModels; //esse primeiro 'app' seria a aplicação em geral

        noticiasModel.salvarNoticia(noticia, connection, function(error, result){
            
            res.redirect('/noticias');
    })
})
}