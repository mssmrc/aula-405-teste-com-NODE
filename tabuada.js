if(process.argv.length === 3 && !isNAN(Number(process.argv[2]) === "number")){

    let base = process.argv[2];

for(let i = 1; i <= 10; i++){
 console.log( base * i );   
}

}
else{
    console.log("Utilização:")
    console.log("node tabuada.js <Apenas um numero>")
}