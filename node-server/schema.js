const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user-skill-db',{useNewUrlParser:true, useUnifiedTopology:true});
const db = mongoose.connection;
db.once('open',function(){
    console.log('we are connected to the database')
});

const userSchema = new mongoose.Schema({
    userid:{type:Number},
    fullname:{type:String},
    phone:{type:Number},
    email:{type:String},
        
})
const skillSchema = new mongoose.Schema({
    userid:{type:Number},
    skills:{type:String},
})
const users = mongoose.model('users',userSchema);
const skills = mongoose.model('skills',skillSchema);

module.exports ={
    db1 : users,
    db2 : skills
}
