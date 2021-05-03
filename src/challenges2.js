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
// function generatePhoneNumber(arrayTelefone) {
//   let numeroRepetidor = 0;
  
//   for(let indexTelefone = 0; indexTelefone < arrayTelefone.length; indexTelefone +=1){
//     let memory = arrayTelefone[indexTelefone];
//     for(let indexRepetidor = 0; indexRepetidor < arrayTelefone.length; indexRepetidor +=1){
//       if (arrayTelefone[indexRepetidor] === memory){
//         numeroRepetidor += 1
//       }
//     }
//     console.log(numeroRepetidor);
//   }
// }

// generatePhoneNumber([1, 1, 1, 1]);

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
