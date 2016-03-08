var express = require ('express');
var app = express();

app.get('/', function(req, res){
	res.send("Ohai!")
})
 
console.log("server listening")
app.listen(3000)

