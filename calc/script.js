const monto=document.getElementById("monto");

const porcentaje=document.getElementById("porcentaje");

const bonus=document.getElementById("bonus");

const total=document.getElementById("total");

function calcular(){

let m=parseFloat(monto.value)||0;

let p=parseFloat(porcentaje.value)||0;

let b=m*p/100;

let t=m+b;

bonus.textContent="$"+b.toLocaleString("es-AR");

total.textContent="$"+t.toLocaleString("es-AR");

}

monto.addEventListener("input",calcular);

porcentaje.addEventListener("input",calcular);

function ponerPorcentaje(valor){

porcentaje.value=valor;

calcular();

}