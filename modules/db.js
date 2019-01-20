var db = require ('mongoose');
var uri ='mongodb://admin:hello@cluster0-shard-00-00-lhcwj.mongodb.net:27017,cluster0-shard-00-01-lhcwj.mongodb.net:27017,cluster0-shard-00-02-lhcwj.mongodb.net:27017/webprog?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
//'mongodb+srv://admin:<admin>@cluster0-lhcwj.mongodb.net/test?retryWrites=true';

//'mongodb+srv://zsolt.lengyel.suli%40gmail.com:<MoshLake23%23>@cluster0-lhcwj.mongodb.net/test?retryWrites=true';
    // 'mongodb://localhost:27017/webprog';
db.connect(uri, function (err){
    console.log ('mongoose.connected');
    console.log(err);
});

module.exports = db;
