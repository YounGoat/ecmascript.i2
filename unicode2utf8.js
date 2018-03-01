'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	
	/* in-package */
	, toUnicode = require('./lib/toUnicode')
	;

function unicode2utf8(uni) {
	if ((uni = toUnicode(uni)) === null) return null;
	
	// 单字节。
	if (uni <= 0x7F) {
		return [ uni ];
	}

	// 多字节。
	else {
		let codes = [];
		let rest = 0x40, init = 0x80;
		do {
			codes.unshift(uni & 0x3F /* 6 bits, 0b00111111 */ | 0x80 /* 0b10000000 */);

			// 右移 6 位。
			uni = uni >> 6;

			// 首字节更新。
			init = init | rest;

			// 首字节最大可容纳有效编码数值 + 1，依次是：
			// 00100000
			// 00010000
			// 00001000
			// 00000100
			// 00000010
			rest = rest >> 1;
		} while(uni > rest)

		// 添加首字节。
		codes.unshift(init | uni);

		return codes;
	}	
}

module.exports = unicode2utf8;