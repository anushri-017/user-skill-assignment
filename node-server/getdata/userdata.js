const  express = require('express');
const mongoose = require('mongoose');
const user = require('../schema');
const router = express.Router();
 
router.get('/',function(req,res){
    //console.log('getting users data');
    //user.db1.find({},function(err, data){
        //if (err) throw err
        //res.send(data)
    //});

    user.db1.aggregate([
    {
        $lookup:
        {
            from:'db2',
            localField:'userid',
            foreignField:'skilluserid',
            as:'userDetails'
        }
    }
    ],function(err,data){
        if (err) throw err
        console.log("getting user data from database")
        res.send(data)
    })
});

module.exports = router;

