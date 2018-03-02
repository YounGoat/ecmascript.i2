'use strict';

const MODULE_REQUIRE = 1
    /* built-in */
    , assert = require('assert')

    /* NPM */
    
    /* in-package */
    , i2 = require('..')
    ;

describe('Unicode encoding', () => {
    // 你好
    // &#20320;&#22909;
    // \u4f60\u597d
    
    it('unicode2utf8', () => {
        assert.deepEqual(i2.unicode2utf8(20320), [0xE4, 0xBD, 0xA0]);
        assert.deepEqual(i2.unicode2utf8(22909), [0xE5, 0xA5, 0xBD]);
    });

    it('unicode2utf16', () => {
        assert.deepEqual(i2.unicode2utf16.be(20320), [0x4F, 0x60]);
        assert.deepEqual(i2.unicode2utf16.be(22909), [0x59, 0x7D]);
    });

    it('unicode2utf32', () => {
        assert.deepEqual(i2.unicode2utf32(20320), [0x00, 0x00, 0x4F, 0x60]);
        assert.deepEqual(i2.unicode2utf32(22909), [0x00, 0x00, 0x59, 0x7D]);
    });
    
});