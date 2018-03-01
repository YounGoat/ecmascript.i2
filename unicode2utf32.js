'use strict';

const MODULE_REQUIRE = 1
	/* built-in */
	
	/* NPM */
	
	/* in-package */
	, toUnicode = require('./lib/toUnicode')
	;

function unicode2utf32(uni, order = 'be') {
	if ((uni = toUnicode(uni)) === null) return null;

	let codes = [
		(uni & 0xFF000000) >> 24,
		(uni & 0x00FF0000) >> 16,
		(uni & 0x0000FF00) >>  8,
		(uni & 0x000000FF)      ,
	];
	return order == 'be' ? codes : codes.reverse();
}

unicode2utf32.be = uni => unicode2utf32(uni, 'be');
unicode2utf32.le = uni => unicode2utf32(uni, 'le');

module.exports = unicode2utf32;