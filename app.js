const express = require ('express');
const app = express();
const morgan = require('morgan');
const chalk = require('chalk');
const swig = require('swig');
const bank = require('./tweetBank');
const routes = require('./routes');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

//do extra credit on 3. logging middleware
//do extra credit on 7. static routing
//make prettier

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.engine('html', swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname+'/views');
swig.setDefaults({cache: false});

const server = app.listen(3000);
const io = socketio.listen(server);

app.use('/', routes(io));



