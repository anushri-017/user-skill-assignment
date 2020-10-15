const  express = require('express');
const mongoose = require('mongoose');
const { db1 } = require('../schema');
const user = require('../schema');
const router = express.Router();
 
router.get('/',function(req,res){
    
    user.db1.aggregate([
    {
        $lookup:
        {
            from:'db2',
            localField:'userid',
            foreignField:'userid',
            as:'user_Details'
        }
    }

    ]).exec(function(err,data){
        if (err) throw err
        console.log("getting user data from database")
        res.send(data)
    })
});

module.exports = router;
