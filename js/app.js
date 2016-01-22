
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

	app.controller('CommentController', function() {
		this.comment = {};

		this.addItem = function(freight)  {
			this.comment.created = Date.now();
			freight.comments.push(this.comment);
			this.comment = {};
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
				created: 1397490980837,
				text: 'Half went by legs',
				author: 'A'
			},
			{
				created: 1397490980837,
				text: 'Half went by legs',
				author: 'A'
			},
			{
				created: 1397490980837,
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
				created: 1397490980837,
				text: 'Half went by legs',
				author: 'A'
			},
			{
				created: 1397490980837,
				text: 'Half went by legs',
				author: 'A'
			},
			{
				created: 1397490980837,
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