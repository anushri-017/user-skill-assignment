const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./database')
const getuserdata = require('./getdata/userdata');
const getskilldata = require('./getdata/skillsdata');
const deleteuserdata = require('./deletedata/userdata');
const deleteskilldata = require('./deletedata/skillsdata');
const updateskilldata = require('./updatedata/skillsdata');
const updateuserdata = require('./updatedata/userdata');
const gettoupdate = require('./getdata/gettoupdate');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.post('/postdata',function(req,res){
    res.send('posting request');
    console.log(req.body)
    console.log(database.db(req.body))
})

app.use('/getuserdata',getuserdata);
app.use('/getskilldata',getskilldata);
app.use('/deleteuserdata',deleteuserdata);
app.use('/deleteskilldata',deleteskilldata);
app.use('/updateskilldata',updateskilldata);
app.use('/updateuserdata',updateuserdata);
app.use('/gettoupdate',gettoupdate);



app.listen(port,()=>{
    console.log(`server running on ${port}`)
})

