

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!<b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
};

function redirecionar(){
    window.open("https://globallabs.academy/");
    //window.location.href = "https://google.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui!";
    elemento.innerHTML = "Obrigado por passar o mouse aqui!";
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}

function validarIdade(idade){
        var validar;
        if (idade >= 18){
            validar = true
        }else{
            validar = false
        }
        return validar
}

var idade = prompt("Qual a sua idade");
console.log(validarIdade(idade));

*/

//alert(soma(5, 10));



/*
var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
*/



/*
var count;
for(count=0; count <=5; count++){
    console.log(count);
}
*/



/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/

/*var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"} ] 
//console.log(frutas);
//alert(frutas[1].nome);


//var fruta = {nome:"maçã", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor);


//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop()
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));



//var nome = "Hettore Eduardo";
//var idade = 30;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//var n1 = 5;
//var n2 = 2;
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);

//console.log(n1 * n2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"))