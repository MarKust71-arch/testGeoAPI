import GeoDb from 'wft-geodb-js-client';

/*
var defaultClient = GeoDb.ApiClient.instance;
 
// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//UserSecurity.apiKeyPrefix['X-Mashape-Key'] = "Token"
 
var api = new GeoDb.GeoApi()
 
var opts = { 
  'namePrefix': "namePrefix_example", // {String} Only divisions whose names start with this prefix. If languageCode is set, the prefix will be matched on the name as it appears in that language.
  'countryIds': "countryIds_example", // {String} Only divisions in these countries (comma-delimited country codes or WikiData ids)
  'excludedCountryIds': "excludedCountryIds_example", // {String} Only divisions NOT in these countries (comma-delimited country codes or WikiData ids)
  'minPopulation': 56, // {Number} Only divisions having at least this population
  'location': "location_example", // {String} Only divisions near this location. Latitude/longitude in ISO-6709 format: ±DD.DDDD±DDD.DDDD
  'radius': 56, // {Number} The location radius within which to find divisions
  'distanceUnit': "MI", // {String} The unit of distance: MI | KM
  'timeZoneIds': "timeZoneIds_example", // {String} Only divisions in these time-zones (comma-delimited)
  'asciiMode': false, // {Boolean} Display results using ASCII characters
  'languageCode': "languageCode_example", // {String} Display results in this language
  'limit': 10, // {Number} The maximum number of results to retrieve
  'offset': 0, // {Number} The zero-ary offset index into the results
  'sort': "sort_example", // {String} How to sort the results. Format: ±SORT_FIELD,±SORT_FIELD where SORT_FIELD = countryCode | elevation | name | population
  'includeDeleted': "NONE", // {String} Whether to include any divisions marked deleted: ALL | SINCE_YESTERDAY | SINCE_LAST_WEEK | NONE
  'hateoasMode': true // {Boolean} Include HATEOAS-style links in results
};
api.findAdminDivisionsUsingGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

*/