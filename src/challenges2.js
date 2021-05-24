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
function verificaArray(param) {
  if (param.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < param.length; index += 1) {
    if (param[index] > 9 || param[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return true;
}

function verificaIgualdade(indiceone, indicetwo) {
  if (indiceone === indicetwo) {
    return true;
  }
  return false;
}
function verificaRepeticao(param) {
  let resposta = 1;
  for (let index = 0; index < param.length; index += 1) {
    if (resposta >= 3) {
      return resposta;
    }
    resposta = 1;
    for (let comparador = 0; comparador < param.length; comparador += 1) {
      if (verificaIgualdade(index, comparador) === true) {
        comparador += comparador;
      } else if (verificaIgualdade(param[index], param[comparador]) === true) {
        resposta += 1;
      }
    }
  }
  return resposta;
}

function generatePhoneNumber(n) {
  if (verificaArray(n) === true) {
    if (verificaRepeticao(n) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
  }
  return verificaArray(n);
}
// Desafio 12
function compararA(a, b, c) {
  if (a < (b + c) && a > Math.abs(b - c)) {
    return true;
  }
}
function compararB(a, b, c) {
  if (b < (a + c) && b > Math.abs(a - c)) {
    return true;
  }
}
function compararC(a, b, c) {
  if (c < (a + b) && c > Math.abs(a - b)) {
    return true;
  }
}
function triangleCheck(a, b, c) {
  if (compararA(a, b, c) && compararB(a, b, c) && compararC(a, b, c)) {
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
  if (soma > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
