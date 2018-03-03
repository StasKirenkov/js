# How to use `amd-cookies.js`
## Get value of current Cookie

    define('myModule', ['cookies'], function (cookies) {
    
      "use strict";
    
      /**
       * @field
       */
      var myCookieValue;
    
      /**
       *@description Get value from `myCookieName`
       */
      myCookieValue = cookies.getCookie('myCookieName');
    });
## Set value of current Cookie

    define('myModule', ['cookies'], function (cookies) {

      "use strict";

      /**
       * @field
       */
      var myCookieValue,
          options,
          date;
      /**
       *@default
       */
      options = {};
      /**
       *@description Set params
       */
      date = new Date(new Date().getTime() + 31536000 * 1000);

      options.Path = '/';
      options.expires = date.toUTCString();

      cookies.setCookie('myCookieName', 'myValue', options);

      /**@description Short entry */
      // cookies.setCookie('myCookieName', 'myValue', {expires: (new Date(new Date().getTime() + 31536000 * 1000)).toUTCString(), Path: '/'});

    });
