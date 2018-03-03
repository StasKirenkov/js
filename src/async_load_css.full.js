/*global window, document*/
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
