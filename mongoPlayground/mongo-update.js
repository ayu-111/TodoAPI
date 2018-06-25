const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) =>{
  if(err){
    return console.log('Couldnot connect to localhost', err);
  }

  var db = client.db('TodoApp');
  db.collection('Users').findOneAndUpdate({
      _id : new ObjectID('5b310127e8c8cc264809b84f'),
  },{
    $set : {
      Name : 'Ayush'
    },
    $inc : {
      Age : 5
    }

  },{
    returnOrginal : false
  }).then( (result) =>{
    console.log(result);
  }, (reject) => {
    console.log(reject);
  });


});
