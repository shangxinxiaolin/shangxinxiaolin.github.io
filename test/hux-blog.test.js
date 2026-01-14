const assert = require('node:assert/strict');
const { test } = require('node:test');
const { createDom, loadScript, triggerReady } = require('./helpers/dom');

test('hux-blog wraps tables and video embeds', () => {
    const { window } = createDom(
        '<!doctype html><html><body>' +
        '<table id="t"></table>' +
        '<iframe id="y" src="https://www.youtube.com/embed/abc"></iframe>' +
        '<iframe id="v" src="https://player.vimeo.com/video/123"></iframe>' +
        '</body></html>'
    );

    loadScript(window, 'js/hux-blog.js');
    triggerReady(window);

    const table = window.document.getElementById('t');
    assert.equal(table.classList.contains('table'), true);
    assert.equal(table.parentElement.classList.contains('table-responsive'), true);

    const youtube = window.document.getElementById('y');
    assert.equal(youtube.classList.contains('embed-responsive-item'), true);
    assert.equal(youtube.parentElement.classList.contains('embed-responsive'), true);
    assert.equal(youtube.parentElement.classList.contains('embed-responsive-16by9'), true);

    const vimeo = window.document.getElementById('v');
    assert.equal(vimeo.classList.contains('embed-responsive-item'), true);
    assert.equal(vimeo.parentElement.classList.contains('embed-responsive'), true);
    assert.equal(vimeo.parentElement.classList.contains('embed-responsive-16by9'), true);
});

test('hux-blog scroll toggles navbar and catalog classes', () => {
    const { window, $ } = createDom(
        '<!doctype html><html><body>' +
        '<div class="navbar-custom" style="height: 10px"></div>' +
        '<div class="intro-header"><div class="container" style="height: 100px"></div></div>' +
        '<div class="side-catalog"></div>' +
        '</body></html>'
    );

    window.innerWidth = 1200;
    if (!window.scrollTo) {
        window.scrollTo = (x, y) => {
            window.pageXOffset = x;
            window.pageYOffset = y;
        };
    }

    loadScript(window, 'js/hux-blog.js');
    triggerReady(window);

    window.scrollTo(0, 200);
    $(window).trigger('scroll');

    const navbar = window.document.querySelector('.navbar-custom');
    const catalog = window.document.querySelector('.side-catalog');
    assert.equal(navbar.classList.contains('is-fixed'), true);
    assert.equal(navbar.classList.contains('is-visible'), false);
    assert.equal(catalog.classList.contains('fixed'), true);

    window.scrollTo(0, 50);
    $(window).trigger('scroll');

    assert.equal(navbar.classList.contains('is-fixed'), true);
    assert.equal(navbar.classList.contains('is-visible'), true);
    assert.equal(catalog.classList.contains('fixed'), false);
});
