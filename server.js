// npm Library
var express = require('express');
var bodyParser = require('body-parser');

//js Library
var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();
app.use(bodyParser.json());

app.post('/Todos', (req, res) =>{
  var file = new Todo({         // creating new object to req data
    text : req.body.text
  });

  file.save().then( (doc) => {
    res.send(doc);      // saving data.
    console.log(doc);
  }, (e) => {
    res.send(e);
  });

});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
