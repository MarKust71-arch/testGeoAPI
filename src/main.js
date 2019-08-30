import GeoDb from 'wft-geodb-js-client';

var defaultClient = GeoDb.ApiClient.instance;
let el = document.getElementById('data');

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
// UserSecurity.apiKey = "YOUR API KEY"
UserSecurity.apiKey = "926cd8f9e2msh6ebd08b2b8bed82p1d2a6ejsnd34f8a097abe"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.apiKeyPrefix['X-Mashape-Key'] = "Token"
 
var api = new GeoDb.GeoApi()
 
var opts = { 
  // 'namePrefix': "", // {String} Only divisions whose names start with this prefix. If languageCode is set, the prefix will be matched on the name as it appears in that language.
  'countryIds': "Q36", // {String} Only divisions in these countries (comma-delimited country codes or WikiData ids)
  // 'excludedCountryIds': "", // {String} Only divisions NOT in these countries (comma-delimited country codes or WikiData ids)
  'minPopulation': 500000, // {Number} Only divisions having at least this population
  // 'location': "", // {String} Only divisions near this location. Latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD
  // 'radius': 56, // {Number} The location radius within which to find divisions
  // 'distanceUnit': "KM", // {String} The unit of distance: MI | KM
  // 'timeZoneIds': "", // {String} Only divisions in these time-zones (comma-delimited)
  // 'asciiMode': false, // {Boolean} Display results using ASCII characters
  // 'languageCode': "", // {String} Display results in this language
  // 'limit': 10, // {Number} The maximum number of results to retrieve
  // 'offset': 0, // {Number} The zero-ary offset index into the results
  // 'sort': "", // {String} How to sort the results. Format: ±SORT_FIELD,±SORT_FIELD where SORT_FIELD = countryCode | elevation | name | population
  // 'includeDeleted': "NONE", // {String} Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE
  // 'hateoasMode': true // {Boolean} Include HATEOAS-style links in results
};
api.findAdminDivisionsUsingGET(opts).then( function(data) {
  console.log('API called successfully. Returned data: ' + data);
  el.innerText = JSON.stringify(data,null,3);
  }, function(error) {
  console.error(error);
  }
);

// fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
// 		"x-rapidapi-key": "926cd8f9e2msh6ebd08b2b8bed82p1d2a6ejsnd34f8a097abe"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

// fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/countries", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
// 		"x-rapidapi-key": "926cd8f9e2msh6ebd08b2b8bed82p1d2a6ejsnd34f8a097abe"
// 	}
// })
//   .then(response => {
//     console.log(response);
//     el.innerText = JSON.stringify(response,null,3);
//     })
//   .catch(err => {
//     console.log(err);
//   });


// fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=500000&countryIds=PL", {
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
//     "x-rapidapi-key": "926cd8f9e2msh6ebd08b2b8bed82p1d2a6ejsnd34f8a097abe"
//   }
// })
// .then(response => response.json())
//   .then(response => { el.innerText = JSON.stringify(response,null,3); })
// .catch(err => {
//   console.log(err);
// });

function foo1() {
  alert('foo1 działa');
}