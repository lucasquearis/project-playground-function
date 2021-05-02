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
  if(tecnologias.length = 0) {
    return 'Vazio!';
} else {
  return arrayObj;
}
}


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
