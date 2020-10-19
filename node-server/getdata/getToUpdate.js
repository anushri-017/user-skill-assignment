const express = require('express');
 const mongoose = require('mongoose');
 const mongodb = require('mongodb')
const user = require('../schema');
const router = express.Router();
 
router.get('/:id', async function(req,res){
    const userid =  {userid:(req.params.id)}
    console.log('getting to be updated data');
     await user.db1.findOne(userid,function(err, data){
        if (err) throw err
        res.send(data)
        console.log(data)
    });
});
module.exports = router;