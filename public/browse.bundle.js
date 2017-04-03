webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _browse = __webpack_require__(12);

	var _browse2 = _interopRequireDefault(_browse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(1);

	riot.tag2('browse', '<ul class="productgrid"> <li class="product" each="{products}"> <navi to="/product/{parent.category}/{name}" prod="{this}"> <img class="productpic" riot-src="https://shop.polymer-project.org{opts.prod.image}" height="300" width="300"> <div class="producttitle">{opts.prod.title}</div> </navi> </li> </ul>', '', '', function(opts) {
			this.products=[];
			this.category='';

			this.on('mount',function(){
				var productList =[];
				if(typeof window !== 'undefined'){
					productList = window.products[opts.category];
				}else{
					productList = __webpack_require__(13)[opts.category];
				}
				this.update({
					category: opts.category,
					products: productList
				});
			});
	});

/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = {
		"men": [
			{
				"name": "YouTube+Organic+Cotton+T-Shirt+-+Grey",
				"title": "YouTube Organic Cotton T-Shirt - Grey",
				"category": "mens_tshirts",
				"price": 14.75,
				"image": "/data/images/10-13058B.jpg",
				"largeImage": "/data/images/10-13058A.jpg"
			},
			{
				"name": "Inbox+-+Subtle+Actions+T-Shirt",
				"title": "Inbox - Subtle Actions T-Shirt",
				"category": "mens_tshirts",
				"price": 17.05,
				"image": "/data/images/10-13256B.jpg",
				"largeImage": "/data/images/10-13256A.jpg"
			},
			{
				"name": "Adult+Android+Superhero+T-Shirt",
				"title": "Adult Android Superhero T-Shirt",
				"category": "mens_tshirts",
				"price": 14.95,
				"image": "/data/images/10-13239B.jpg",
				"largeImage": "/data/images/10-13239A.jpg"
			},
			{
				"name": "Men+s+Vintage+Heather+T-Shirt",
				"title": "Men's Vintage Heather T-Shirt",
				"category": "mens_tshirts",
				"price": 15.8,
				"image": "/data/images/10-13264B.jpg",
				"largeImage": "/data/images/10-13264A.jpg"
			},
			{
				"name": "Basic+Black+T-Shirt",
				"title": "Basic Black T-Shirt",
				"category": "mens_tshirts",
				"price": 16.9,
				"image": "/data/images/10-13265B.jpg",
				"largeImage": "/data/images/10-13265A.jpg"
			}
		],
		"women": [
			{
				"name": "Ladies+Chrome+T-Shirt",
				"title": "Ladies Chrome T-Shirt",
				"category": "ladies_tshirts",
				"price": 13.3,
				"image": "/data/images/10-23180B.jpg",
				"largeImage": "/data/images/10-23180A.jpg"
			},
			{
				"name": "Ladies+Google+New+York+T-Shirt",
				"title": "Ladies Google New York T-Shirt",
				"category": "ladies_tshirts",
				"price": 18.35,
				"image": "/data/images/10-23226B.jpg",
				"largeImage": "/data/images/10-23226A.jpg"
			},
			{
				"name": "Ladies+Gmail+T-Shirt",
				"title": "Ladies Gmail T-Shirt",
				"category": "ladies_tshirts",
				"price": 16.4,
				"image": "/data/images/10-23179B.jpg",
				"largeImage": "/data/images/10-23179A.jpg"
			},
			{
				"name": "Ladies+G+Logo+White+T-Shirt",
				"title": "Ladies G Logo White T-Shirt",
				"category": "ladies_tshirts",
				"price": 13.3,
				"image": "/data/images/10-23178B.jpg",
				"largeImage": "/data/images/10-23178A.jpg"
			},
			{
				"name": "Ladies+Android+Pride+T-Shirt",
				"title": "Ladies Android Pride T-Shirt",
				"category": "ladies_tshirts",
				"price": 19.1,
				"image": "/data/images/10-23177B.jpg",
				"largeImage": "/data/images/10-23177A.jpg"
			},
			{
				"name": "Ladies+Ringspun+Crew+Neck",
				"title": "Ladies Ringspun Crew Neck",
				"category": "ladies_tshirts",
				"price": 19.7,
				"image": "/data/images/10-23172B.jpg",
				"largeImage": "/data/images/10-23172A.jpg"
			},
			{
				"name": "Ladies+Tri-Blend+V-Neck+T-Shirt",
				"title": "Ladies Tri-Blend V-Neck T-Shirt",
				"category": "ladies_tshirts",
				"price": 35.1,
				"image": "/data/images/10-23227B.jpg",
				"largeImage": "/data/images/10-23227A.jpg"
			},
			{
				"name": "Bella+Ladies+Favorite+Tee",
				"title": "Bella Ladies Favorite Tee",
				"category": "ladies_tshirts",
				"price": 10.5,
				"image": "/data/images/10-23228B.jpg",
				"largeImage": "/data/images/10-23228A.jpg"
			},
			{
				"name": "Ladies+Bamboo+T-Shirt",
				"title": "Ladies Bamboo T-Shirt",
				"category": "ladies_tshirts",
				"price": 20.65,
				"image": "/data/images/10-23176B.jpg",
				"largeImage": "/data/images/10-23176A.jpg"
			},
			{
				"name": "Ladies+L+S+Colorblock+Raglan",
				"title": "Ladies L/S Colorblock Raglan",
				"category": "ladies_tshirts",
				"price": 36.95,
				"image": "/data/images/10-23173B.jpg",
				"largeImage": "/data/images/10-23173A.jpg"
			},
			{
				"name": "Bella+Scoop-Neck+Ladies+T-Shirt",
				"title": "Bella Scoop-Neck Ladies T-Shirt",
				"category": "ladies_tshirts",
				"price": 13.1,
				"image": "/data/images/10-23171B.jpg",
				"largeImage": "/data/images/10-23171A.jpg"
			}
		]
	};

/***/ }

});