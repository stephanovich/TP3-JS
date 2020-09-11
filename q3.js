class Aluno {
  constructor(numero, nota){
      this.numero = numero;
      this.nota = nota;
  }

  situacaoAluno(){
    return this.nota >= 60 ? "APROVADO" : "REPROVADO"; 
  }

  diagnosticoAluno(){
    return `O aluno ${this.numero} obteve nota ${this.nota} e está ${this.situacaoAluno()}`;
  }
}

let divQ3 = document.querySelector("#q3");
divQ3.style = "margin-top: 15px;"
divQ3.id = "DQ3";
let hr3 = document.createElement("hr");
divQ3.appendChild(hr3)
let tituloQ3 = document.createElement("h1");
tituloQ3.innerText = "Questão 03";
divQ3.appendChild(tituloQ3);

let div_bt = document.createElement("div");

let btnQ3 = document.createElement("button");
btnQ3.innerText = "Relatorio";
btnQ3.addEventListener("click", clickMain);

div_bt.appendChild(btnQ3);
divQ3.appendChild(div_bt);
let divAlunos = document.createElement("div");
divAlunos.id = "lista";
createHeader()
divQ3.appendChild(divAlunos);
let div_rodape = document.createElement("div");
divQ3.appendChild(div_rodape);

function clickMain(){
  const qtdAlunos = 20;
  let listaAlunos = [];
  for (let i = 1; i <= qtdAlunos; i++){
    let aluno = new Aluno(i, Math.floor(Math.random() * 100));
    listaAlunos.push(aluno);
  }
  createHeader();
  divAlunos.innerText = "";
  document.getElementById("CAB").style.display = "block";
  div_rodape.innerText = '';
  div_rodape.style.backgroundColor = "#d3d3d3";
  let aprovados = 0;

  for (let aluno of listaAlunos){
    let divAluno = document.createElement("div");
    divAluno.id = `aluno-${aluno.numero}`;
    divAluno.style = "color: #FFFFFF;"
    let divNumero = document.createElement("div");
    divNumero.innerText = aluno.numero;
    divNumero.style = "float: left; width: 10%;";
    let divNota = document.createElement("div");
    divNota.innerText = aluno.nota;
    divNota.style = "float: left; width: 20%;";
    let divSituacao = document.createElement("div");
    divSituacao.innerText = aluno.situacaoAluno();
    divSituacao.style = "float: left; width: 70%;";
    divAluno.appendChild(divNumero);
    divAluno.appendChild(divNota);
    divAluno.appendChild(divSituacao);

    if(aluno.nota >= 60){
      divNumero.style.backgroundColor = 'green';
      divNota.style.backgroundColor = 'green';
      divSituacao.style.backgroundColor = 'green';
      aprovados++;
    } else {
      divNumero.style.backgroundColor = 'red';
      divNota.style.backgroundColor = 'red';
      divSituacao.style.backgroundColor = 'red';
    }
    divAlunos.appendChild(divAluno);
  }

  div_rodape.innerText = `Do total de ${qtdAlunos} alunos, ${aprovados} (${Math.round(aprovados/qtdAlunos * 100)}%) foram aprovados e ${qtdAlunos - aprovados} (${Math.round(((qtdAlunos - aprovados) / qtdAlunos) * 100)}%) foram reprovados.`;

}


function createHeader(){
  let cab = document.createElement("div");
  cab.id = "CAB";
  cab.style.display = "none";
  let numCab = document.createElement("div");
  numCab.innerText = "N°";
  numCab.style = "float: left; width: 10%;";
  let notaCab = document.createElement("div");
  notaCab.innerText = "NOTA";
  notaCab.style = "float: left; width: 20%;";
  let sitCab = document.createElement("div");
  sitCab.innerText = "SITUAÇÃO";
  sitCab.style = "float: left; width: 70%;";
  cab.appendChild(numCab);
  cab.appendChild(notaCab);
  cab.appendChild(sitCab);
  divQ3.appendChild(cab);
}

function rodape(){

}