
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const containA = names.reduce((accA,receiverA) => {
    
    let a = receiverA.split('a').length-1;
    let A = receiverA.split('A').length-1;
    
    return accA + (a+A);
  },0);

  return containA;
}

assert.deepStrictEqual(containsA(), 20);