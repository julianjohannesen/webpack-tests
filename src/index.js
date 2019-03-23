import hljs from 'highlight.js/lib/highlight';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import 'highlight.js/styles/a11y-dark.css';
import greet from './greet.js';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);

hljs.initHighlightingOnLoad();

console.log("index.js loaded.");

console.log(greet("Julian"));