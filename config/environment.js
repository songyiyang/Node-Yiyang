var bodyParser = require('body-parser');

module.exports = function(app, express){
	app.set('appName', 'yiyang-ebay');
	app.set('port', process.env.PORT || 3000);
	app.set('view engine', 'ejs');
	app.use(bodyParser.json());
	console.log(__dirname);
	app.use(express.static("../" + __dirname + '/public'));
}
