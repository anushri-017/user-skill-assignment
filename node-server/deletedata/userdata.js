const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const user = require('../schema');
const router = express.Router();

    router.delete('/:id',async function(req,res){
        console.log("deleting users data..");
       await user.db1.deleteOne({userid:req.params.id},function(err){ 
            console.log(`data having id ${req.params.id} is now delete`)
         
        })        
    })
module.exports = router;