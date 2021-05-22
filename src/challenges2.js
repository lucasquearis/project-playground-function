// Desafio 10
function techList(tecnologias, nome) {
  tecnologias.sort();
  let arrayObj = [];

  for (let index = 0; index < tecnologias.length; index += 1) {
    arrayObj.push({
      tech: tecnologias[index],
      name: nome,
    });
  }
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  return arrayObj;
}

// Desafio 11
function generatePhoneNumber(n) {
  if (n.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let numeroRepeticao = 1;
  for (let index = 0; index < n.length; index += 1) {
    if (numeroRepeticao >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } if (n[index] > 9 || n[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    numeroRepeticao = 1;
    for (let comparador = 0; comparador < n.length; comparador += 1) {
      if (comparador === index) {
        numeroRepeticao = numeroRepeticao;
      } else if (n[index] === n[comparador]) {
        numeroRepeticao += 1;
      }
    }
  }
  return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
}

// Desafio 12
function triangleCheck(a, b, c) {
  let comparacaoLadosA = a < (b + c) && a > Math.abs(b - c);
  let comparacaoLadosB = b < (a + c) && b > Math.abs(a - c);
  let comparacaoLadosC = c < (a + b) && c > Math.abs(a - b);
  if (comparacaoLadosA && comparacaoLadosB && comparacaoLadosC) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let regex = /\d+/g;
  let resultados = string.match(regex);
  let soma = 0;
  for (let index = 0; index < resultados.length; index += 1) {
    let converteNumeros = parseInt(resultados[index], 10);
    soma += converteNumeros;
  }
  return `${soma} copos de água`;
}

console.log(hydrate('10 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
