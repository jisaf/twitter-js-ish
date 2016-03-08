const express = require ('express');
const app = express();
const morgan = require('morgan');
const chalk = require('chalk');
const swig = require('swig');

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
app.use(morgan('dev'));

app.engine('html', swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname+'/views');
swig.setDefaults({cache: false});

app.get('/', function(req, res){
	res.send("Ohai!");
});

app.get('/news', function(req, res){
	res.send(new Date());
});
 
console.log("server listening");
app.listen(3000);