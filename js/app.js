
(function() {
	var app = angular.module('warehouse', []); // 'module_name', [dependancies]

	app.controller('WarehouseController', function(){ 
		this.freights = items;
	});

	var items = [
	{
		client: 'Sanqch',
		supplier: 'Lemerex',
		//deliveryNote: 3038851,
		//param: 'Mercury',
		courrier: 'TNT',
		amount: 2,
		weight: 179.5,
		longstay: false,
		gone: false,
	},
	{
		client: 'Sanqch',
		supplier: 'Lemerex',
		//deliveryNote: 3038851,
		//param: 'Mercury',
		courrier: 'TNT',
		amount: 2,
		weight: 179.5,
		longstay: false,
		gone: false,
	}
	];

})();