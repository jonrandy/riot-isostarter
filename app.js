let riot = require('riot');
riot.route = require('riot-route');
let navi = require('./tags/navi.tag');
let page = require('./tags/page.tag');
let header = require('./tags/header.tag');
let appRoutes =  require('./tags/routes.tag');
let notFound = require('./tags/notfound.tag');

if (riot.render && module.exports) {
	module.exports = (_location,cb) => {
		riot.renderAsync('page', {location: _location}).then(cb).catch(() => { cb('Error rendering Riot Tag!'); });
	};
} else {
	riot.mount('page');
}

