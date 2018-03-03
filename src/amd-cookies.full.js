define('cookies', function () {

	'use strict';

	return {

		setCookie: function setCookie(name, value, options) {

			options = options || {};

			var expires,
				d,
				updatedCookie,
				propName,
				propValue;

			expires = options.expires;

			if (typeof expires === "number" && expires) {
				d = new Date();
				d.setTime(d.getTime() + expires * 1000);
				expires = options.expires = d;
			}

			if (expires && expires.toUTCString) {
				options.expires = expires.toUTCString();
			}

			value = encodeURIComponent(value);

			updatedCookie = name + "=" + value;

			for (propName in options) {
				if (options.hasOwnProperty(propName)) {
					updatedCookie += "; " + propName;
					propValue = options[propName];
					if (propValue !== true) {
						updatedCookie += "=" + propValue;
					}
				}
			}

			document.cookie = updatedCookie;

			return true;
		},
		deleteCookie: function deleteCookie(name) {
			setCookie(name, "", {
				expires: -1
			});
		},
		getCookie: function getCookie(name) {
			var matches = document.cookie.match(new RegExp(
				"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
			));

			return matches ? decodeURIComponent(matches[1]) : undefined;
		}
	};
});
