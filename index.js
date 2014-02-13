
/**
 * Module Dependencies
 */

var mongo = require('mongodb');
var Db = require('./lib/db');

/**
 * Expose Db
 */

module.exports = Db;

/**
 * Objects to wrap
 */

var wrap = [
  'Collection',
  'Cursor',
  'Db',
  'MongoClient'
];

/**
 * Expose comongo wrapper
 */

wrap.forEach(function (name) {
  Db[name] = require('./lib/' + name.toLowerCase());
});

/**
 * Expose everything else
 */

for (var key in mongo) {
  if (!Db[key])
    Db[key] = mongo[key];
}
