const assert = require('node:assert/strict');
const { test } = require('node:test');
const { createDom, loadScript } = require('./helpers/dom');

test('tagcloud applies size and color ranges', () => {
    const { window, $ } = createDom(
        '<!doctype html><html><body>' +
        '<a id="t1" class="tag" rel="1">one</a>' +
        '<a id="t2" class="tag" rel="3">two</a>' +
        '<a id="t3" class="tag" rel="5">three</a>' +
        '</body></html>'
    );

    loadScript(window, 'js/jquery.tagcloud.js');

    $('.tag').tagcloud({
        size: { start: 10, end: 20, unit: 'px' },
        color: { start: '#000000', end: '#ffffff' }
    });

    assert.equal(window.document.getElementById('t1').style.fontSize, '10px');
    assert.equal(window.document.getElementById('t2').style.fontSize, '15px');
    assert.equal(window.document.getElementById('t3').style.fontSize, '20px');

    assert.equal(
        window.document.getElementById('t2').style.backgroundColor.toLowerCase(),
        '#808080'
    );
});

test('tagcloud handles equal weights', () => {
    const { window, $ } = createDom(
        '<!doctype html><html><body>' +
        '<a id="a1" class="tag" rel="5">one</a>' +
        '<a id="a2" class="tag" rel="5">two</a>' +
        '</body></html>'
    );

    loadScript(window, 'js/jquery.tagcloud.js');

    $('.tag').tagcloud({
        size: { start: 12, end: 16, unit: 'px' }
    });

    assert.equal(window.document.getElementById('a1').style.fontSize, '12px');
    assert.equal(window.document.getElementById('a2').style.fontSize, '12px');
});
