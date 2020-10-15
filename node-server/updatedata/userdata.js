const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const user = require('../schema');

router.put('/:id',function(req,res){
   
    user.db1.updateOne({userid:req.params.id},
        {$set:{
            userid:req.body.userid,
            fullname:req.body.fullname,
            phone:req.body.phone,
            email:req.body.email 
        }},function(err,data){
            if(err) throw err 
            console.log('Updating User Data....!!!')
            res.send(data)
        })
})

 module.exports = router;
 