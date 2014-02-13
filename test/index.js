
var mongo = require('mongodb');
var comongo = require('../');
var co = require('co');

describe('co-mongo', function () {

  describe('connect', function () {
    it('should return comongo db', function (done) {
      co(function *() {
        var db = yield comongo.connect('mongodb://127.0.0.1:27017/test');
        db.should.be.instanceOf(comongo.Db);
      })(done);
    });
  });
});
