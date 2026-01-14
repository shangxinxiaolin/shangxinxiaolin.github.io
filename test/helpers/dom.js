const { JSDOM } = require('jsdom');
const fs = require('node:fs');
const path = require('node:path');

function createDom(html) {
    const dom = new JSDOM(html || '<!doctype html><html><body></body></html>', {
        runScripts: 'dangerously',
        pretendToBeVisual: true
    });
    const { window } = dom;
    const jquerySrc = fs.readFileSync(path.join(__dirname, '..', '..', 'js', 'jquery.js'), 'utf8');
    window.eval(jquerySrc);
    return { dom, window, $: window.jQuery };
}

function loadScript(window, relativePath) {
    const src = fs.readFileSync(path.join(__dirname, '..', '..', relativePath), 'utf8');
    window.eval(src);
}

function triggerReady(window) {
    window.document.dispatchEvent(new window.Event('DOMContentLoaded', { bubbles: true }));
    window.dispatchEvent(new window.Event('load'));
}

module.exports = { createDom, loadScript, triggerReady };
