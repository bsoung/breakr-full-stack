global.databaseUri = 'mongodb://localhost/timer';
require('babel-polyfill');
var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');
var UrlPattern = require('url-pattern');
var app = require('../server/index').app;
var server = require('../server/index');
var User = require('../models/User');
var bcrypt = require('bcryptjs');
var should = chai.should();
var bob;
chai.use(chaiHttp);



describe('User endpoints', function() {
	beforeEach(function(done) {
		this.singlePattern = new UrlPattern('/api/user/:username');
		this.listPattern = new UrlPattern('/api/user');
		this.singlePattern = new UrlPattern('/api/login');
		server.runServer(function() {
			User.create({username: 'bob', password: 'test', timer: {}},
				function(err, user) {
					bob = user;
				});
		})
	})
	after(function(done){
		done();
	})
	describe('/api/user', function(){
		describe('POST', function(){
			it('returns a list of users', function(){
				return chai.request(app)

			})
		})
	})
    it('should have a password');
    it('should have a username');
    it('should have a timer');
});
// 