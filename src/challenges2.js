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
    if (numeroRepeticao >= 3 ){
      return "não é possível gerar um número de telefone com esses valores";
    } else if (n[index] > 9 || n[index] < 0) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      numeroRepeticao = 1;
      for (let comparador = 0; comparador < n.length; comparador += 1) {
        if (comparador === index) {
          numeroRepeticao = numeroRepeticao
        } else if (n[index] === n[comparador]) {
          numeroRepeticao += 1;
        }
      }
    }
  }
  return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
}

// Desafio 12
function triangleCheck() {

}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
