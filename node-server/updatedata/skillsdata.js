const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const skill = require('../schema');
const { ObjectID } = require('mongodb');

router.put('/:id',function(req,res){
    console.log('Updating Skills Data....!!!')
    skill.db2.UpdateOne(req.params.id,
        {$set:{
            userid:req.body.userid,
            skills:req.body.skills
        }},function(err,data){
            if(err) throw err 
            res.send("Record has been updated..!")
        })
})

 module.exports = router;