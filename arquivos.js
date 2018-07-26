const fs = require("fs");

let texto;

fs.readFile('teste.txt', function(erro, sucesso){
    if(erro){
        console.log("IHH, RAPAZ, DEU ERRADO");
        console.log(erro);        
    }
    else{
        sucesso = sucesso.toString();
        console.log("Arquivo lido com sucesso.");
        console.log(texto);
        texto = sucesso;
    }
});

let paraEscrever = process.argv[2];

// Para gravar sempre UM NOVO ARQUIVO (sobrescrever) usar fs.writeFile

fs.appendFile('testeEscrita.txt', `${paraEscrever}\r\n`, erro => {
    if(erro){
        console.log("ERRO AO ESCREVER O ARQUIVO");
    }
    else{
        console.log("Deu bom - arquivo escrito com sucesso")
    }
});