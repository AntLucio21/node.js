console.log('Criando um site de noticias com nodeJS')

// pode ser feita dessa forma ou criando uma variável e chamando a função(linha 10 e 26)
var http = require('http');
// http.createServer( function( req, res){

//     res.end('<html><body>Portal de Noticias</body></html>')
// }).listen(3000); 

var servidor = http.createServer( function( req, res){
    
    var categoria = req.url;

    if (categoria == '/tecnologia'){
        res.end('<html><body>Noticias de tecnologia</body></html>')    
    }
    else if (categoria == '/moda'){
        res.end('<html><body>Noticias de moda</body></html>')    
    }
    else{
        res.end('<html><body>Portal de Noticias</body></html>')
    }
    
})

servidor.listen(3000);

// control + c no terminal desliga o servidor.