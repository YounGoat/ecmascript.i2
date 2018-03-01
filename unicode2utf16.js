'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	
	/* in-package */
	, toUnicode = require('./lib/toUnicode')
	;

/**
 * 
 * @param {number} uni - unicode number
 * @param {'le'|'be'} order - byte order
 */
function unicode2utf16(/*number*/ uni, order = 'be') {
	if ((uni = toUnicode(uni)) === null) return null;	

	// 基本多语言平面
	// BMP
	// 
	// 保留编码已被排除，故简单判断高位即可。
	// if (uni < 0xD800 || 0xDFFF < uni && uni < 0x10000) {
	if (uni < 0x10000) {

		let be /*    big end */ = uni >> 8;
		let le /* little end */ = uni & 0xFF;
		return order == 'be' ? [ be, le ] : [ le, be ];
	}
	
	// 辅助平面
	// SMP
	// 0x010000 - 0x10FFFF
	else {
		let n = uni - 0x10000;
		// 0x0 - 0xFFFFF
		// total 20 bits

		// 使用一个代理对表示。
		// 0xD800 == 0b 1101 10,00 0000 0000，后 10 位用于保存 n 的前 10 位，故也称 BigEndian
		// 0xDC00 == 0b 1101 11,00 0000 0000，后 10 位用于保存 n 的后 10 位，故也称 LittleEndian
		let leadSurrogate = 0xD800 | (n >> 10);
		let tailSurrogate = 0xDC00 | (n & 0x3FF);

		// 拆分为字节。
		let be = [ leadSurrogate >> 8, leadSurrogate & 0xFF ];
		let le = [ tailSurrogate >> 8, tailSurrogate & 0xFF ];

		return order == 'be' ? be.concat(le) : le.concat(be);
	}
}

unicode2utf16.be = uni => unicode2utf16(uni, 'be');
unicode2utf16.le = uni => unicode2utf16(uni, 'le');

module.exports = unicode2utf16;