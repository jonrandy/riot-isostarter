require('riot');
require('riot-tagrouter/tags/router.tag');
require('riot-tagrouter/tags/route.tag');
require('riot-tagrouter/tags/navigate.tag');

<app-router>
	<router base-route="/">
			<route path='/' component={this.parent.loadHome}></route>
			<route path='/browse/:category' component={this.parent.loadBrowse}></route>
			<route path='/product/:category/:productName' component={this.parent.loadProduct}></route>
			<route path='/..' component="notfound"></route>
	</router>
	<script>
		var self = this;
		this.loadHome = function(){
			return new Promise((resolve,reject) => {
				require.ensure("./home.tag",function(require){
					var tagName = require("./home.tag");
					resolve("home");
				},"home");
			})
		}
		this.loadBrowse = function(){
			return new Promise((resolve,reject) => {
				require.ensure("./browse.tag",function(require){
					require("./browse.tag");
					resolve("browse");
				},"browse");
			})
		}
		this.loadProduct = function(){
			return new Promise((resolve,reject) => {
				require.ensure("./product.tag",function(require){
					require("./product.tag");
					resolve("product");
				},"product");
			})
		}
	</script>
</app-router>