var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/bdviajes',{useUnifiedTopology: true, useNewUrlParser: true})

.then(()=>{
console.log('Consexion exitosa..!');

app.listen(port,()=>{
    console.log('servidor corriendo en el puerto: ' + port);
});
})

.catch(err=>console.log(err));