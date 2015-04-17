var ebay = require('ebay-api');

// First Method
exports.ebayGetById = function (itemId, callback){

	ebay.ebayApiGetRequest({

	  'serviceName': 'Shopping',
	  'opType': 'GetSingleItem',
	  'appId': 'GeneralA-8df7-44d7-bb46-8562d999edf3',

	  'params': {
	    'ItemId': itemId
	  }

	}, callback);

};

// Second Method
exports.ebayGetByKeywords = function (params, filters, callback){

	ebay.ebayApiGetRequest({
    serviceName: 'FindingService',
    opType: 'findItemsByKeywords',
    appId: 'GeneralA-8df7-44d7-bb46-8562d999edf3',
    params: params,
    filters: filters,
    parser: ebay.parseItemsFromResponse
  }, callback);
};

exports.getSearchParams = function (keywords, outputSelector, perPage){
	var params = {};

	params.keywords = keywords;
	params.outputSelector = outputSelector;
	params['paginationInput.entriesPerPage'] = perPage;

	return params;
}

exports.getSearchFilters = function(itemFilter, domainFilter){
	var filters = {};
	filters.itemFilter = itemFilter;
	filters.domainFilter = domainFilter;
}