var scrypt = require('scrypt');

module.exports = function(options) {
  return {
    compare: function(password, hash, salt, done) {
      scrypt.verify(hash, password, done);
    },
    hash: function(password, done) {
      scrypt.hash.config.keyEncoding = 'utf8';
      scrypt.hash(password, {N: options.N, r: options.r, p: options.p}, done);
    }
  }
}
