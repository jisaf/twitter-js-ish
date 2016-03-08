var express = require ('express');
var app = express();
const morgan = require('morgan')
var chalk = require('chalk');

//extra credit on 3. logging middleware
// function getStatus(func){
// 	var result = func()
// 	return result.statusCode
// }

// replaced with morgan
// function logger (req, res, next){
// 	console.log(chalk.blue(req.method), chalk.yellow(req.url))
// 	console.log(next())
// 	// console.log(res.statusCode)

// }

// function specialLogger(req, res, next){
// 	console.log("Special Area:", chalk.magenta(req.method), chalk.cyan(req.url))
// 	next()
// }

// app.use(logger)
// app.use('/special', specialLogger)
// app.use(morgan)
app.use(morgan('combined'));

app.get('/', function(req, res){
	res.send("Ohai!")
	//success()
})
app.get('/news', function(req, res){
	res.send(new Date())
	//success()
})
 
console.log("server listening")
app.listen(3000)

