# How to use `amd-cookies`
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
# How to use `async_load_css`
    <script type = "text/javascript">

    function async_load(url, rel, as, media, type) {

        'use strict';

        var style_el,
            scr;

        if (url === undefined) {
            url = '';
        }

        if (rel === undefined) {
            rel = '';
        }

        if (as === undefined) {
            as = '';
        }

        if (media === undefined) {
            media = '';
        }

        if (type === undefined) {
            type = '';
        }

        url = String(url);
        rel = String(rel);
        as = String(as);
        type = String(type);

        if (url === '' || rel === '' || as === '') {
            return false;
        }

        style_el = document.createElement('link');
        style_el.rel = rel;
        style_el.as = as;
        style_el.href = url;

        if (media !== '') {
            style_el.media = media;
        }

        if (type !== '') {
            style_el.type = type;
        }

        scr = document.getElementsByTagName("script")[0];
        scr.parentNode.insertBefore(style_el, scr);

        return true;
    }

    function ready() {

        'use strict';

        window.onload = async_load('/assets/css/style.css', 'stylesheet', 'style', 'all');
    }

    document.addEventListener("DOMContentLoaded", ready);

    </script>