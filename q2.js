let div2 = document.querySelector("#q2");
div2.style = "margin-top: 15px;"
let h12 = document.createElement("h1");
h12.textContent = "Questão 02";
let hr2 = document.createElement("hr");

let div_fat = document.createElement("div");
let div_btn2 = document.createElement("div");
let div_res2 = document.createElement("div");
div_res2.id = "resultadoQ2";  
div_res2.style = "width: 40%; background-color: #d3d3d3; margin-top: 5px;"

let labelfat = document.createElement("label");
labelfat.textContent = "Calcular fatorial: ";

let inputfat = document.createElement("input");
inputfat.type = "number";
inputfat.id = "fat";
inputfat.style = "margin-left: 5px;"

let btn2 = document.createElement("button");
btn2.innerText = "Calcular";

btn2.addEventListener("click", cliqueQuestao02);

div2.appendChild(hr2);
div2.appendChild(h12);
div2.appendChild(div_fat);
div2.appendChild(div_btn2);
div2.appendChild(div_res2);
div_fat.appendChild(labelfat);
div_fat.appendChild(inputfat);
div_btn2.appendChild(btn2);


function cliqueQuestao02(){
  let fat = parseInt(document.getElementById("fat").value);
  if(isNaN(fat)){
    document.getElementById("resultadoQ2").innerText = "Campo não preenchido!!!";
  } else {
    let inicio = new Date().getTime();
    let format = `O fatorial de ${fat} é ${fatorial(fat)}`;
    let fim = new Date().getTime();
    let tempo = fim - inicio;
    format += `\nTempo gasto para calcular: ${tempo < 1 ? "<1" : tempo}ms`
    document.getElementById("resultadoQ2").innerText = format;
  }
}

function fatorial(numero){
  let resultado = 1;
  let contador2 = 1;

  while(contador2 <= numero){
   resultado *= contador2;
   contador2++;
  }
  return resultado;
}

