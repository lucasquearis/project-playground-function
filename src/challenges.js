// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
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
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] === numeroMaior) {
      numeroRepeticao += 1;
    }
  }
  return numeroRepeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function verificaDivisao(param) {
  if (param % 5 === 0 && param % 3 === 0) {
    return 'fizzBuzz';
  }
  if (param % 5 === 0) {
    return 'buzz';
  }
  if (param % 3 === 0) {
    return 'fizz';
  }
  return 'bug!';
}

function fizzBuzz(arr) {
  let resposta = [];
  for (let index = 0; index < arr.length; index += 1) {
    let elemento = arr[index];
    resposta.push(verificaDivisao(elemento));
  }
  return resposta;
}

// Desafio 9
function codificaA(param) {
  switch (param) {
  case 'a':
    return 1;
  case 'e':
    return 2;
  default:
    return param;
  }
}
function codificaB(param) {
  switch (param) {
  case 'i':
    return 3;
  case 'o':
    return 4;
  case 'u':
    return 5;
  default:
    return param;
  }
}

function encode(text) {
  let resposta = [];
  for (let index = 0; index < text.length; index += 1) {
    let elemento = text[index];
    if (elemento === 'a' || elemento === 'e') {
      resposta.push(codificaA(elemento));
    } else {
      resposta.push(codificaB(elemento));
    }
  }
  let respostaPronta = resposta.join('');
  return respostaPronta;
}
function decodificaA(param) {
  switch (param) {
  case '1':
    return 'a';
  case '2':
    return 'e';
  default:
    return param;
  }
}

function decodificaB(param) {
  switch (param) {
  case '3':
    return 'i';
  case '4':
    return 'o';
  case '5':
    return 'u';
  default:
    return param;
  }
}

function decode(text) {
  let resposta = [];
  for (let index = 0; index < text.length; index += 1) {
    let elemento = text[index];
    if (elemento === '1' || elemento === '2') {
      resposta.push(decodificaA(elemento));
    } else {
      resposta.push(decodificaB(elemento));
    }
  }
  let respostaPronta = resposta.join('');
  return respostaPronta;
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
