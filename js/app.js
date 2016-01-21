
(function() {
	var app = angular.module('warehouse', []); // 'module_name', [dependancies]

	app.controller('PanelController', function() {
		this.tab = 1; 

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}

	});

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
		weight: 256,
		longstay: false,
		gone: false,
		file: [
			{
				filetype: 'pdf',
				filename: '11911.pdf'
			}, 
			{
				filetype: 'pdf',
				filename: '11912.pdf'
			}
			],
		comments: [
			{
				date: 26122015,
				text: 'Half went by legs',
				author: 'A'
			},
			{
				date: 26122015,
				text: 'Half went by legs',
				author: 'A'
			},
			{
				date: 26122015,
				text: 'Half went by legs',
				author: 'A'
			}
		]
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
		file: [
			{
				filetype: 'jpg',
				filename: '123.jpg'
			}, 
			{
				filetype: 'txt',
				filename: '124.txt'
			}
		],
		comments: [
			{
				date: 26122015,
				text: 'Half went by legs',
				author: 'A'
			},
			{
				date: 26122015,
				text: 'Half went by legs',
				author: 'A'
			},
			{
				date: 26122015,
				text: 'Half went by legs',
				author: 'A'
			}
		]

	},
	{
		client: 'Sanqch',
		supplier: 'Lemerex',
		//deliveryNote: 3038851,
		//param: 'Mercury',
		courrier: 'TNT',
		amount: 2,
		weight: 2000,
		longstay: false,
		gone: false,
		file: [
			{
				filetype: 'doc',
				filename: '11911.doc'
			}, 
			{
				filetype: 'rar',
				filename: '11912.rar'
			}
		],
		comments: []
	}
	];

})();