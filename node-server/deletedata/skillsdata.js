const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const skill = require('../schema');
const router = express.Router();

    router.delete('/:id',function(req,res){
        console.log('deleting user data');
        if(req.params.id){
            skill.db2.findByIdAndDelete(req.params.id,function(err,data){
                res.send(data)
            })
        }
    })
module.exports = router;