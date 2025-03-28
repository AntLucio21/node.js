// usando o FRAMEWORK EXPRESS para abrir servidor
var app = require('./config/server');

//não precisamos dessas rotas pois estamos usando o consign para pegar as rotas automaticamente 

// var rotaHome = require('./app/routes/home')(app); 
// // rotaHome(app); //posso chamar as funções dessa forma tbm

// var rotaInclusao_Noticia = require('./app/routes/formulario_inclusao_noticia')(app);
// // rotaInclusao_Noticia(app);

// var rotaNoticias = require('./app/routes/noticias')(app);
// // rotaNoticias(app);

app.listen(3000, function(){
    console.log("Servidor ON"); // console.log(msg()) dessa forma
});