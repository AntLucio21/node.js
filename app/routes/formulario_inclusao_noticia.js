const { body} = require('express-validator');

// var a = require('../views/admin/form_inclusao_noticia')
module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', function(req, res){
        app.app.controllers.admin.formulario_inclusao_noticia(app, req, res);
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

        app.app.controllers.admin.noticias_salvar(app, req, res)
        // [body('titulo').notEmpty().withMessage('O titulo é obrigatório!')], //coloca isso antes da function dentro do parentesis app.post


        // body('noticia').isLength({min: 10}).withMessage('O conteudo deve ter pelo menos 10 caracteres'),
       
})
}