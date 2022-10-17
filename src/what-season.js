const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getUTCMonth();
  } catch (e) {
    throw Error('Invalid date!');
 }

  const seasonsInYear = {0:'winter',1:'winter',2:'spring',3:'spring',4:'spring',5:'summer',6:'summer',7:'summer',8:'autumn',9:'autumn',10:'autumn',11:'winter'};
  let month =   date.getUTCMonth();
  if(month >= 0 && month <= 11)  {
    return seasonsInYear[month];
  }
  return "Invalid date!";
}
module.exports = {
  getSeason
};
