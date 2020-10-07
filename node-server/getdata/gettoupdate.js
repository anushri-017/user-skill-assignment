const express = require('express');
 const mongoose = require('mongoose');
const user = require('../schema');
const router = express.Router();
 
router.get('/:id',function(req,res){
    console.log('getting to be updated data');
    user.db1.findOne({userid:req.params.id},function(err, data){
        if (err) throw err
        res.send(data)
        console.log(data)
    });
});
module.exports = router