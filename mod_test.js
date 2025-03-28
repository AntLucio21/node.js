// // maneira simples de módulo

// var msg = 'Este módlulo contem apenas uma string!'

// module.exports = msg;

// já com funções, seria dessa forma

module.exports = function(){
    var msg = 'Este módlulo contem apenas uma string!';
    return msg;
}