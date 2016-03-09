module.exports = function(io){
	var express = require('express'); // do we need this if this is a function going through app.js, which already has express
	var router = express.Router();
	var moment = require('moment');
	// could use one line instead: var router = require('express').Router();
	var tweetBank = require('../tweetBank');

	router.get('/', function (req, res) {
	  var tweets = tweetBank.list();
	  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true });
	});

	router.get('/users/:name', function(req, res){
		var name = req.params.name;
		var list = tweetBank.find({name: name});
		res.render( 'index', {title: 'Twitter.js - Posts by' + name, tweets: list, showForm: true, formfield: name});
	});

	router.get('/tweets/:id', function(req, res){
		var id = req.params.id;
		var list = tweetBank.find({id: +id});
		res.render( 'index', {title: 'Twitter.js - Post id ' + id, tweets: list, showForm: true});
	});

	router.post('/tweets', function(req, res,next){
		var name = req.body.name;
		var text = req.body.text;
		var tweet = tweetBank.add(name, text);
		tweet.created = moment(tweet.created).fromNow();
		// var tweet = tweetBank.find({name: name})
		io.sockets.emit('new_tweet', tweet);
		// next()
		res.redirect('/');
	});


	return router;
};