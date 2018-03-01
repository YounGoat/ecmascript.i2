'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	
	/* in-package */
	;

function toUnicode(uni) {
	if (typeof uni != 'number' || uni % 1 != 0) {
		return null;
	}

	if (uni < 0 || uni > 0x10FFFF) {
		return null;
	}

	// 为字符编码需要保留的值。
	if (0xD800 <= uni && uni <= 0xDFFF) {
		return null;
	}

	return uni;
}

module.exports = toUnicode;