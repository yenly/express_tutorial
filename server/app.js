var express = require('express');
var path = require('path');
var app = express();
// use any port greater than 80
var port = 8080;

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use('/api', require('./api'));


// start our server by typing 'node app' or 'node app.js' in terminal
// app.listen(port, function(err, res){
//   if(err){
//     console.log('server error');
//   }else{
//     console.log('server started');
//   }
// });
// Another method used with nodemon
// benefit of nodemon is it would auto restart your server if there is changes in your files.
// to start server 'nodemon app'
app.listen(port, function(){
  console.log('server started')
});
