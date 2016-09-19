var request = require('request');
var chai = require('chai');
var expect = chai.expect;

describe('Slack Interface', function() {
  it('can hit the url', function(done) {
    var url = 'http://localhost:4000/api/slack';
    var mock_request = {
      form: {
        From: '+5555555555',
        Body: 'Hey there, testing if this works!'
      }
    }
    request.post(url, mock_request, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    })
  })
});
