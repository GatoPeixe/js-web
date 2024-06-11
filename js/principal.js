
{/* // console.log("Olá, Mundo!"); */ }
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var title = document.querySelector("title");
title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //tr


// for (var i = 0; i < pacientes.length; i++) {

//     var paciente = pacientes[i];

//     var tdPeso = paciente.querySelector(".info-peso"); // td da tr
//     var peso = tdPeso.textContent; // valor td

//     var tdAlt = paciente.querySelector(".info-altura"); // td da tr
//     var altura = tdAlt.textContent; // valor td

//     var imc = peso / (Math.pow(altura, 2));

//     var tdImc = paciente.querySelector(".info-imc");

//     tdImc.textContent = imc.toFixed(2); //colocando o valor do imc dentro da tabela

//     console.log(peso);
//     console.log(altura);
//     console.log(imc.toFixed(2));
// }

pacientes.forEach(paciente =>{ // para cada paciente dentro de pacientes, 1 loop./ => - aerofunction (eecuta o que está no próximo bloco)
    var tdPeso = paciente.querySelector(".info-peso"); // td da tr
    var peso = tdPeso.textContent; // valor td

    var tdAlt = paciente.querySelector(".info-altura"); // td da tr
    var altura = tdAlt.textContent; // valor td

    var imc = peso / (Math.pow(altura, 2));

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = imc.toFixed(2); //colocando o valor do imc dentro da tabela

    console.log(peso);
    console.log(altura);
    console.log(imc.toFixed(2));
})

