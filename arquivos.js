const fs = require("fs");

let texto;

fs.readFile('pessoas.txt', function(erro, sucesso){
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

let escreverDados
escreverDados= process.argv[2] [process.argv[3]];

// Para gravar sempre UM NOVO ARQUIVO (sobrescrever) usar fs.writeFile

fs.appendFile('pessoas.txt', `${escreverDados}`, erro => {
    if(erro){
        console.log("ERRO AO ESCREVER O ARQUIVO");
    }
    else{
        console.log("Deu bom - arquivo escrito com sucesso")
    }
});