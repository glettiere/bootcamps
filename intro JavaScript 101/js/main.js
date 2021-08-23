var nome ="Gilbert Lettiere";
var idade = 42
var idade2 = 10
var frase = "Tecnologia é o melhor tipo de noticía para se consumir diáriamente"
var fruta = {nome: "maça", cor: "vermelha"} //cria um dicionário. tipo 'JSON'
var frutas = [{nome: "maça", cor: "vermelha"},{nome: "uva", cor: "roxa"}] //cria um LISTA de dicionário. tipo 'JSON' 
//var idadeX = 18;
//var idadeX = prompt("Qual sua idade?")

//alert(nome + " tem " + idade + " anos")
//alert(idade + idade2)

/* 
//var idadeX = 18;
var idadeX = prompt("Qual sua idade?")

if (
    idadeX >= 18
) {
    alert ("Maior que 18")
} else {
    alert("Menor que 18")
}
*/

/* 
var count = 0;
while (count <= 7) {
    console.log(count);
    alert(count)
    count ++
};
*/

var count;
for (count = 0; count <=5; count++) {
    alert(count);
}


var dt = new Date();
alert(dt.getMonth());
alert(dt.getTime());
alert(dt.getDay());
alert(dt.getFullYear());


//var lista =["maça","pêra","laranja"]
//lista.push("uva"); //add item a lista
//lista.pop(); //remove o último item da lista

//alert(lista)

console.log(nome)
console.log (idade)
console.log(idade2)
console.log(idade+idade2)
console.log(frase) // mostra o valor da string da frase declarada
console.log(frase.replace ("Tecnologia","Informática")) // troca a primeira palavra pela segunda
//alert(frase.replace("Tecnologia","Informática"))
console.log(frase.toUpperCase()) // mostra a frase em maiúsculo
console.log(frase.toLowerCase()) // mostra a frase em minúsculo
console.log(lista) // mostra toda a lista 
console.log(lista[1]) // mostra o primeiro item da lista
console.log(lista.length) // mostra o tamanho da lista
console.log(lista.reverse()) // mostra o conteúdo fa lista ao contrário (do último item para o primeiro item)
console.log(lista.toString()) // a lista perde a referencia de Array e se torna uma String
console.log(lista.join(" - ")) // altera a ',' da String pelo sinal '-'
console.log(fruta) // como não como Array, mas sim como Object
console.log(fruta.nome)
console.log(frutas)
//alert(fruta.cor)
alert(frutas[1].nome)

console.log("hoje é" + getdate

// FUNCTION

function validarIdade(fIdade) {
    var fValidar
    id (fIdade >= 18){
        fValidar = true
    }else{
        fValidar=false
    }
    return fValidar
}
var fIdade = prompt("Qual a idade?")
console.log(validarIdade(fIdade));  