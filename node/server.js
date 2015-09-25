var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname+'/public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(__dirname+"/favicon.ico"))

app.set('views',__dirname+"/views");
app.set('view engine','jade');

app.get('/:id', function(req,res){
if(req.params.id=="akshay")
	{
		var data = {'name':'Akshay', 'user': 'akshay30', 'web':'svlisln@otherExample.org', 'twitter':'@bbbbbbbb', 'bio':'aaaaaaaaaaaaaaa'};
		res.render('index',data);
	}
	else if(req.params.id=="karthik")
	{
		var data = {'name':'Karthik', 'user': 'karthik13', 'web':'abcd@example.org', 'twitter':'@abfbh', 'bio':'dgavhjdalbdkbvkbdahvgdvaj'};
		res.render('index',data);
	}
});
app.listen(350);