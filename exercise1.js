
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  
  
  const arrayOfObjects = arrays.reduce((accumulator,receiver) => {
     
    return accumulator.concat(receiver);
    },[]);
  // tive que concatenar o receiver estava errando no retorno

  return arrayOfObjects;

}
      
    


assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);