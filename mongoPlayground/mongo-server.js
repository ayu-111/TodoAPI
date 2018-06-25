const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to mongoDB');
  }
  console.log('ConnectED to MongoDB server');
  var db = client.db('TodoApp');
  db.collection('Todos').insertOne({
  text : 'I think its done',
   completed : false
  }, (err, result) => {
  if(err){
  return console.log('Couldnot insert');
  }
  console.log(JSON.stringify(result.ops, undefined, 2));
  });
  // db.collection('Users').insertOne({
  //   Name : 'Ayush',
  //   Age : '21'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Couldnot insert');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.close();
});
