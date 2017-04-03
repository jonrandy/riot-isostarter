var riot = require('riot');
riot.route = require('riot-route');
var navi = require('./tags/navi.tag');
var page = require('./tags/page.tag');
var header = require('./tags/header.tag');
var appRoutes =  require('./tags/routes.tag');

if(riot.render && module.exports){
	module.exports = function(_location,cb){
		riot.renderAsync('page', {location: _location}).then(cb);
	}
}else{
	riot.mount('page');
}

