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
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] === numeroMaior) {
      numeroRepeticao += 1;
    }
  }
  console.log(numeroRepeticao);
  return numeroRepeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let fizzBuzzBug = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if ((arrayNumbers[index] % 3) === 0 && (arrayNumbers[index] % 5) === 0) {
      fizzBuzzBug.push('fizzBuzz');
    } else if ((arrayNumbers[index] % 3) === 0) {
      fizzBuzzBug.push('fizz');
    } else if ((arrayNumbers[index]) % 5 === 0) {
      fizzBuzzBug.push('buzz');
    } else {
      fizzBuzzBug.push('bug!');
    }
  }
  return fizzBuzzBug;
}

// Desafio 9
function encode(codificado) {
  let fraseCodificada = [];
  for (let index = 0; index < codificado.length; index += 1) {
    if (codificado[index] === 'a') {
      fraseCodificada.push(1);
    } else if (codificado[index] === 'e') {
    fraseCodificada.push(2);
    } else if (codificado[index] === 'i') {
    fraseCodificada.push(3);
    } else if (codificado[index] === 'o') {
    fraseCodificada.push(4);
    } else if (codificado[index] === 'u') {
    fraseCodificada.push(5);
    } else {
    fraseCodificada.push(codificado[index]);
    }
  }
  let concatFrase = fraseCodificada.join('');
  return concatFrase;
}
function decode(decodificado) {
  let fraseDecodificada = [];
  for (let index = 0; index < decodificado.length; index += 1 ){
    if (decodificado[index] === '1') {
      fraseDecodificada.push('a');
    } else if (decodificado[index] === '2') {
    fraseDecodificada.push('e');
    } else if (decodificado[index] === '3') {
    fraseDecodificada.push('i');
    } else if (decodificado[index] === '4') {
    fraseDecodificada.push('o');
    } else if (decodificado[index] === '5') {
      fraseDecodificada.push('u');
    } else {
      fraseDecodificada.push(decodificado[index]);
    }
  }
  let concatFrase = fraseDecodificada.join('');
  return concatFrase;
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
