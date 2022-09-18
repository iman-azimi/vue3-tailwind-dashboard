/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'crypto\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow-up': '&#xe93e;',
		'icon-arrow-down': '&#xe93f;',
		'icon-Unlock': '&#xe938;',
		'icon-Lock': '&#xe939;',
		'icon-share': '&#xe93a;',
		'icon-coin-1': '&#xe93b;',
		'icon-coin': '&#xe93c;',
		'icon-bitcoin-convert': '&#xe93d;',
		'icon-volume-slash': '&#xe900;',
		'icon-volume-high': '&#xe901;',
		'icon-video-circle': '&#xe902;',
		'icon-video': '&#xe903;',
		'icon-verify': '&#xe904;',
		'icon-trend-up': '&#xe905;',
		'icon-trend-down': '&#xe906;',
		'icon-trash': '&#xe907;',
		'icon-tick-circle': '&#xe908;',
		'icon-teacher': '&#xe909;',
		'icon-sun': '&#xe90a;',
		'icon-stickynote': '&#xe90b;',
		'icon-status-up': '&#xe90c;',
		'icon-sms-tracking': '&#xe90d;',
		'icon-sms-converted': '&#xe90e;',
		'icon-setting-2': '&#xe90f;',
		'icon-search-normal-1': '&#xe910;',
		'icon-search-normal': '&#xe911;',
		'icon-profile': '&#xe912;',
		'icon-notification-bing': '&#xe913;',
		'icon-note': '&#xe914;',
		'icon-more-square': '&#xe915;',
		'icon-moon': '&#xe916;',
		'icon-menu-board': '&#xe917;',
		'icon-menu': '&#xe918;',
		'icon-logout': '&#xe919;',
		'icon-login': '&#xe91a;',
		'icon-info-circle': '&#xe91b;',
		'icon-import': '&#xe91c;',
		'icon-home-2': '&#xe91d;',
		'icon-health': '&#xe91e;',
		'icon-graph': '&#xe91f;',
		'icon-gift': '&#xe920;',
		'icon-gallery': '&#xe921;',
		'icon-frame': '&#xe922;',
		'icon-folder-2': '&#xe923;',
		'icon-folder': '&#xe924;',
		'icon-document-text': '&#xe925;',
		'icon-document': '&#xe926;',
		'icon-diagram': '&#xe927;',
		'icon-danger': '&#xe928;',
		'icon-creative-commons': '&#xe929;',
		'icon-copyright': '&#xe92a;',
		'icon-clock': '&#xe92b;',
		'icon-category': '&#xe92c;',
		'icon-camera': '&#xe92d;',
		'icon-box-1': '&#xe92e;',
		'icon-box': '&#xe92f;',
		'icon-book': '&#xe930;',
		'icon-bag': '&#xe931;',
		'icon-arrow-right': '&#xe932;',
		'icon-arrow-left': '&#xe933;',
		'icon-arrange-square-2': '&#xe934;',
		'icon-arrange-square': '&#xe935;',
		'icon-add-circle': '&#xe936;',
		'icon-activity': '&#xe937;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
