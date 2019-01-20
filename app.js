var express = require ('express');
var bodyParser = require('body-parser');

var loginRoutes = require('./routes/login');
var projectRoutes=require('./routes/project');
var honlapRoute = require('./routes/router');
//var projectRoute = require('./routes/project');

var app = express();

app.set('view engine', 'ejs');


//app.use('/project', projectRoute);

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use('/', honlapRoute);
app.use('/', loginRoutes);
app.use('/', projectRoutes);

app.listen(8081);