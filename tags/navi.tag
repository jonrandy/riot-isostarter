<navi>
	<a href='{opts.to}' onclick={navigateToRoute}>
		<yield/>
	</a>
	<script>
		var self = this;
		this.navigateToRoute = function(e){
			e.preventDefault();
			riot.route(self.opts.to,self.opts.title||null,self.opts.replace?true:false);
		}
	</script>
</navi>