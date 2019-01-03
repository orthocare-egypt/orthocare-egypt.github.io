
var options = {
	//url: "resources/countries.json",
	data: [ 
		{"name": "product one", "code": "AF"}, 
		{"name": "product two", "code": "AX"}, 
		{"name": "product three", "code": "AL"}, 
		{"name": "product four", "code": "DZ"}, 
		{"name": "product five", "code": "AS"} 
	],

	getValue: "name",

	list: {
		match: {
			enabled: true
		},
		maxNumberOfElements: 8
	},

	theme: "square"

};


$( document ).ready(function() {
	$("#square").easyAutocomplete(options);
});
