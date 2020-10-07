const  express = require('express');
const mongoose = require('mongoose');
const skill = require('../schema');
const router = express.Router();
 
router.get('/',function(req,res){
    console.log('getting skills data');
    skill.db2.find({},function(err, data){
        if (err) throw err
        res.send(data)
    });
});

module.exports = router;