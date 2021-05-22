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
    let decodificador = codificado[index];
    if (decodificador === 'a') {
      fraseCodificada.push(1);
    } else if (decodificador === 'e') {
      fraseCodificada.push(2);
    } else if (decodificador === 'i') {
      fraseCodificada.push(3);
    } else if (decodificador === 'o') {
      fraseCodificada.push(4);
    } else if (decodificador === 'u') {
      fraseCodificada.push(5);
    } else {
      fraseCodificada.push(decodificador);
    }
  }
  let concatFrase = fraseCodificada.join('');
  return concatFrase;
}
function decode(decodificado) {
  let fraseDecodificada = [];
  for (let index = 0; index < decodificado.length; index += 1) {
    let decodificador = decodificado[index];
    if (decodificador === '1') {
      fraseDecodificada.push('a');
    } else if (decodificador === '2') {
      fraseDecodificada.push('e');
    } else if (decodificador === '3') {
      fraseDecodificada.push('i');
    } else if (decodificador === '4') {
      fraseDecodificada.push('o');
    } else if (decodificador === '5') {
      fraseDecodificada.push('u');
    } else {
      fraseDecodificada.push(decodificador);
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
