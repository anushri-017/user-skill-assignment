const  express = require('express');
const mongoose = require('mongoose');
const skill = require('../schema');
const router = express.Router();
 
router.get('/',function(req,res){
    skill.db2.aggregate([
        {
            $lookup:
            {
                from:'db1',
                localField:'skills',
                foreignField:'fullname',
                as:'skills_Details'
            }
        }
    ]).exec(function(err,data){
        if(err)throw err
        console.log('getting skills data from database')
        res.send(data)
    })

})
module.exports = router;