const express = require ('express');
const app = express();
const morgan = require('morgan');
const chalk = require('chalk');
const swig = require('swig');
const bank = require('./tweetBank')
const routes = require('./routes')

//do extra credit on 3. logging middleware
//do extra credit on 7. static routing
app.use(morgan('dev'));

app.engine('html', swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname+'/views');
swig.setDefaults({cache: false});

app.use('/', routes)
app.use(express.static('public'))



app.listen(3000);