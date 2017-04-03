<page>
	<div id="t1"><header></header></div>
	<div id="t2"><app-router location={ opts.location }></app-router></div>

	<script>
		setTimeout(function() {
			this.trigger('ready')
		}.bind(this), 500)
	</script>
</page>