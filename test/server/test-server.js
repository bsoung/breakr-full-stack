
require('babel-polyfill');
var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');
var UrlPattern = require('url-pattern');
var app = require('../../server/index').app;
var runServer = require('../../server/index').runServer;
var server = require('../../server/index');
var User = require('../../models/User');
var bcrypt = require('bcryptjs');
var should = chai.should();
var db = mongoose.connect('mongodb://localhost/timer');
chai.use(chaiHttp);



describe('User endpoints', function() {
	beforeEach(function(done) {
		this.singlePattern = new UrlPattern('/api/user/:username');
		this.listPattern = new UrlPattern('/api/user');
		this.singlePattern = new UrlPattern('/api/login');
		
		runServer(function() {
			done();
		})
	})
	after(function (done) {
	    db.connection.db.dropDatabase(function () {
	        db.connection.close(function () {
	            done();
	        });
	    });
	});
	describe('/api/user', function(){
		describe('POST', function(){
			it('returns a list of users', function(){
				var user = {username: 'joe', password: 'abcd'};
				return chai.request(app)
					.post(this.listPattern.stringify())
					.send(user)
					.then(function(res){
						res.should.have.status(201)
						res.type.should.equal('application/json')
						res.body.should.be.an('object')
						res.body.user.should.have.property('username')
						res.body.user.username.should.equal('joe')
						res.body.user.should.have.property('timer')

					})


			})
		})
	})
    // it('should have a password');
    // it('should have a username');
    // it('should have a timer');
});
// 