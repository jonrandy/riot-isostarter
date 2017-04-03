<browse>
	<ul class='productgrid'>
		<li class="product" each={products}>
			<navi to='/product/{parent.category}/{name}' prod={this}>
				<img class="productpic" src='https://shop.polymer-project.org{opts.prod.image}' height="300" width="300" />
				<div class="producttitle">{opts.prod.title}</div>
			</navi>
		</li>
	</ul>
	<script>
		this.products=[];
		this.category='';
		
		this.on('mount',function(){
			var productList =[];
			if(typeof window !== 'undefined'){
				productList = window.products[opts.category];
			}else{
				productList = require('../data.json')[opts.category];
			}
			this.update({
				category: opts.category,
				products: productList
			});
		});
	</script>
</browse>