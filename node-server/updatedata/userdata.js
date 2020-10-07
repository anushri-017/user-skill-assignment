const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const user = require('../schema');

router.put('/:id',function(req,res){
    console.log('Updating User Data....!!!')
    user.db1.updateOne( {userid:req.params.id},
        {$set:{
            userid:req.body.userid,
            fullname:req.body.fullname,
            phone:req.body.phone,
            email:req.body.email 
        }},function(err){
            if(err) throw err 
            res.send("Record has been updated..!")
        })
})

 module.exports = router;