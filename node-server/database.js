const users = require('./schema');
const skills = require('./schema');

function connectdb(arg) {
    console.log(users.db1)
    const userdata = new users.db1({
        userid: arg.userid,
        fullname: arg.fullname,
        phone: arg.phone,
        email: arg.email
    })
    
    console.log(skills.db2)
    const skilldata = new skills.db2({
        userid: arg.userid,
        skills: arg.skills
    })

    userdata.save(function (err, data) {
        if (err) return console.error(err);
    })
    skilldata.save(function (err, data) {
        if (err) return console.error(err);
    })
}
module.exports = {
    db: connectdb
}