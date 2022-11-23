var ID_LENGTH = 8;

function generateUID() {
  var ALPHABET = '0123456789';
  var rtn = '';
  for (var i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return rtn;
}

module.exports = { generateUID };
