let div_qtdQ4 = document.createElement("div");
let div_minQ4 = document.createElement("div");
let div_maxQ4 = document.createElement("div");
let div_btnQ4 = document.createElement("div");
let div_tituloQ4 = document.createElement("h1");
let div_resultQ4 = document.createElement("div");
div_resultQ4.style = "background-Color: #d3d3d3;width: 40%;";
div_tituloQ4.innerText = "Questão 04"

let divQ4 = document.querySelector("#q4");
let hr4 = document.createElement("hr");
divQ4.appendChild(hr4);
divQ4.style = "margin-top: 15px;"
divQ4.appendChild(div_tituloQ4);
divQ4.appendChild(div_qtdQ4);
divQ4.appendChild(div_minQ4);
divQ4.appendChild(div_maxQ4);
divQ4.appendChild(div_btnQ4);
divQ4.appendChild(div_resultQ4);

let label_qtdQ4 = document.createElement("label");
label_qtdQ4.innerText = "Quantidade de números: ";

let input_qtd04 = document.createElement("input")
input_qtd04.type = "number";
input_qtd04.id = "qtQ4";
input_qtd04.style = "margin-top: 5px;"

let label_mindQ4 = document.createElement("label");
label_mindQ4.innerText = "Número mínimo: ";

let input_mind04 = document.createElement("input")
input_mind04.type = "number";
input_mind04.id = "minQ4";
input_mind04.style = "margin-top: 5px;";

let label_maxdQ4 = document.createElement("label");
label_maxdQ4.innerText = "número máximo: ";

let input_maxd04 = document.createElement("input")
input_maxd04.type = "number";
input_maxd04.id = "maxQ4";
input_maxd04.style = "margin-top: 5px;";

let btnQ4 = document.createElement("button");
btnQ4.innerText = "Calcular";
btnQ4.addEventListener("click", clickQuestao4);

div_qtdQ4.appendChild(label_qtdQ4);
div_qtdQ4.appendChild(input_qtd04);
div_minQ4.appendChild(label_mindQ4);
div_minQ4.appendChild(input_mind04);
div_maxQ4.appendChild(label_maxdQ4);
div_maxQ4.appendChild(input_maxd04);
div_btnQ4.appendChild(btnQ4);
div_btnQ4.style = "margin-top: 5px;"

function clickQuestao4(){
  
  let minQ4 = parseInt(document.getElementById("minQ4").value);
  let maxQ4 = parseInt(document.getElementById("maxQ4").value);
  let qtdQ4 = parseInt(document.getElementById("qtQ4").value);
  if(isNaN(minQ4) || isNaN(maxQ4) || isNaN(qtdQ4)){
    div_resultQ4.innerText = "Por favor preencher todos os campos!!"
  } else if(qtdQ4 > ((maxQ4 - minQ4) + 1)){
    div_resultQ4.innerText = "A quantidade de números deve ser menor que a diferença entre os intervalos!"
  } else {
    let resultQ4 = gerarAleatorio(minQ4, maxQ4, qtdQ4);
    div_resultQ4.innerText = resultQ4;
  }

}

function gerarAleatorio(minQ4,  maxQ4, qtdQ4){
  let listaQ4 = [];
  while(listaQ4.length < qtdQ4) {
    let valor = Math.round((Math.random() * ( maxQ4 - minQ4 )) + minQ4); 
    if(!listaQ4.includes(valor)){
      listaQ4.push(valor);
    }
  }
  listaQ4.sort(sortfunction);
  let formatQ4 = ""
  for(let i of listaQ4){
    formatQ4 += i.toString() + " ";
  }
  return formatQ4;
}

function sortfunction(a, b){
  return (a - b)
}
