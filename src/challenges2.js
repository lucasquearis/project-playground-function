// Desafio 10
function techList(tecnologias, nome){
  tecnologias.sort();
  let arrayObj = []

  for (index = 0; index < tecnologias.length; index += 1){
    arrayObj.push({
      tech: tecnologias[index],
      name: nome
    });
  }
  if(tecnologias.length === 0) {
    return 'Vazio!'
}
return arrayObj;
}

// Desafio 11
function generatePhoneNumber(numeros){
  if(numeros.length != 11){
    return "Array com tamanho incorreto."
  }
  const numerosSemRepeticao = [...new Set(numeros)]
  for(let index = 0; index < numeros.length; index += 1){
    if(numerosSemRepeticao.length <= 9 || numeros[index] > 9 || numeros[index] < 0){
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  return '(' + numeros[0] + numeros [1] + ') ' + numeros[2]+ numeros[3] + numeros[4] + numeros[5] + numeros[6] + '-' + numeros[7] + numeros[8] + numeros[9] + numeros[10]
}
// Desafio 12
function triangleCheck() {
  // seu código aqui
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
