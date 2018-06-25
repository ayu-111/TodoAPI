const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) =>{
  if(err){
    return console.log('Couldnot connect to localhost', err);
  }

  var db = client.db('TodoApp');
  db.collection('Users').findOneAndDelete({Name : 'Prashant'}).then( (result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  client.close();

});
