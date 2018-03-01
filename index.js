'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    
    /* NPM */
    
    /* in-package */
    ;

[   'unicode2utf8', 
    'unicode2utf16', 
    'unicode2utf32',
].forEach(name => {
    module.exports[name] = require(`./${name}`);
});
