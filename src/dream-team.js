const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'

 *
 */



function createDreamTeam(arrayNames) {
  if (!Array.isArray(arrayNames)) {
    return false;
  } 
  let nameTeam = [];
  let names = arrayNames.filter(name => typeof name === 'string');
  for(let name of names) {
    nameTeam.push(name.trim().toUpperCase()[0]);
  }
  return nameTeam.sort().join('')

}

module.exports = {
  createDreamTeam
};

console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]))