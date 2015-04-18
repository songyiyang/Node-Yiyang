var EbayModel = require('../models/ebay');
var async = require('async');
var ebay = require('ebay-api');

module.exports = function (app) {
	app.get('/itemId/:itemId', function (req, res){
		// req.params.itemId = "381043343160";
		var response = EbayModel.ebayGetById(req.params.itemId, res);
	});


	app.get('/keywords/', function (req, res){
		//keywords = 'canon, powershot';
		var params = EbayModel.getSearchParams(
			req.query.keywords.split(','),
			[ 'AspectHistogram' ],
			10
		);

		var filters = EbayModel.getSearchFilters(
			[new ebay.ItemFilter("FreeShippingOnly", true)],
			[new ebay.ItemFilter("domainName", "Digital_Cameras")]
		);

		EbayModel.ebayGetByKeywords(params, filters, function (error, items){
			if (error){
				res.end(JSON.stringify({err: String(error)}));
			}else{
				res.render('ebay', JSON.stringify(items));
			};
		})
	});
}