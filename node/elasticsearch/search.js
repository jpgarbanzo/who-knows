var elasticsearch = require('elasticsearch');
var Q = require('kew');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});


var definition = { 

   query : function(query) {
   		var defer = Q.defer();

   	    client.search({
		  index: 'user',
		  type: 'expertise',
		  body: {
		    query: {
		      prefix: {
		        expertise: query
		      }
		    },
		    "sort": [
		    {
		        "_score":{
		        	"order": "desc"
		    	}
		    },
		    {
		    	"weight": {
		        	"order": "desc"
		    	}
		    }]
		  }
		}).then(function (resp) {
		    var hit = resp.hits.hits;

		    if (hit.length == 0) {
		    	defer.resolve({});
		    } else {
		    	var result = [];
		    	for (var index = 0; index < hit.length; index++) { 
		    		result.push(hit[index]._source);
				}
			    defer.resolve(result);
		    }
		}, function (err) {
		    defer.reject({
		    	error : err.message
		   	});
		});

		return defer.promise;
   }
};


module.exports = definition;