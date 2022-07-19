const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_list_db');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'erroe connecting to db'));

db.once('open',function(){
    console.log('Success fully connected to the database')
})