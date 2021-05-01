// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayPalavra = string.split(' ');
  return arrayPalavra;
}

// Desafio 4
function concatName(arrays) {
  let primeiroResultado = arrays[0];
  let divisoria = ', ';
  let ultimoResultado = arrays[arrays.length - 1];
  let stringResultado = ultimoResultado + divisoria + primeiroResultado;
  return stringResultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = wins * 3;
  let pontosTies = ties * 1;
  let pontosTotais = pontosWins + pontosTies;
  return pontosTotais;
}

// Desafio 6
function highestCount(arrayNumber) {
  let numeroMaior = Math.max(...arrayNumber);
  let numeroRepeticao = 0;
  for(let index = 0; index < arrayNumber.length; index+=1){
    if(arrayNumber[index] === numeroMaior){
      numeroRepeticao +=1;
    }
  }
  
  console.log(numeroRepeticao);
  return numeroRepeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if(distanciaCat1 > distanciaCat2){
    return 'cat2';
  } else if(distanciaCat1 < distanciaCat2){
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}


// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
