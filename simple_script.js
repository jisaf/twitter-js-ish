var swig = require('swig');
var locals = {
  title: 'An Example',
  people: [
    {name: 'Gandalf'},
    {name: 'Harry'},
    {name: 'Hermione'},
    {name: 'Sabrina'},
    {name: 'Samantha'},
    {name: 'Oz'},
    {name: 'Willow'}
  ]
};

swig.renderFile(__dirname+'/views/index.html',locals,function(err,output) {
  if (err) throw err;
  console.log(output);
});