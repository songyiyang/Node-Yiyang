var fs = require('fs'),
    path = require('path');

module.exports = function (app) {

  fs.readdirSync('./controllers').forEach(function (file) {
    if (file === path.basename(__filename)) { return; }
    require('./' + file)(app);
  });

  app.get('/', function (req, res){
		res.render('index', {'msg': 'Yiyang Song'});
	});

};
