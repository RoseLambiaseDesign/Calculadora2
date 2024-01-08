
const resultadoSomar = parseFloat(doument.querySelector("somar").value)
const buttonSomar = document.getElementById("somar")

function somar() {
    const num1 = parseFloat(document.querySelector("#num1Soma").value);
    const num2 = parseFloat(document.querySelector("#num2Soma").value);
    const total = num1 + num2;
    document.getElementById("resultadoSoma").innerHTML = total;
    document.getElementsByClassNamequery("resultado").setAttribute("id","resultado");
    const paragrafo= document.getElementById("resultadoSoma");
    const resultado= document.createElement("strong");
    paragrafo.appendChild(resultado);
    resultado.innerText = total;

}
const resultadoSubtrair = parseFloat(doument.querySelector("subtrair").value);
const buttonSubtrair = document.getElementById("subtrair");

function subtrair() {
    const num1 = parseFloat(document.querySelector("#num1Sub").value);
    const num2 = parseFloat(document.querySelector("#num2Sub").value);
    const total = num1 - num2;
    document.getElementById("resultadoSub").innerHTML = total;
    document.getElementsByClassName("resultado").setAttribute("id","resultado");
    const paragrafo= document.getElementById("resultadoSub");
    const resultado= document.createElement("strong");
    paragrafo.appendChild(resultado);
    resultado.innerText = total;
   
}

const resultadomultiplicar = parseFloat(doument.querySelector("multiplicar").value);
const buttonMultiplicar = document.getElementById("multiplicar");

function multiplicar() {
    const num1 = parseFloat(document.querySelector("#num1Mult").value);
    const num2 = parseFloat(document.querySelector("#num2Mult").value);
    const total = num1 * num2;
    document.getElementById("resultadoMult").innerHTML = total;
    document.getElementsByClassName("resultado").setAttribute("id","resultado");
    const paragrafo= document.getElementById("resultadoMult");
    const resultado= document.createElement("strong");
    paragrafo.appendChild(resultado);
    resultado.innerHTML = total;
   
}
const resultado = parseFloat(doument.querySelector("dividir").value);
const buttonDividir = document.getElementById("dividir");

function dividir() {
    const num1 = parseFloat(document.querySelector("#num1Div").value);
    const num2 = parseFloat(document.querySelector("#num2Div").value);
    const total = num1 / num2;
    document.getElementById("resultadoDiv").innerHTML = total;
    document.getElementsByClassName("resultado").setAttribute("id","resultado");
    const paragrafo= document.getElementById("resultadoDiv");
    const resultado= document.createElement("strong");
    paragrafo.appendChild(resultado);
    resultado.innerHTML = total;
   
}

