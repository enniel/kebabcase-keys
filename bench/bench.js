/* globals bench suite set */
'use strict';
const kebabcaseKeysNpm = require('kebabcase-keys');
const kebabcaseKeys = require('..');
const fixture = require('./fixture');

suite('kebabcaseKeys', () => {
	set('mintime', 1000);

	bench('npm', () => {
		kebabcaseKeysNpm(fixture, {deep: true});
	});

	bench('master', () => {
		kebabcaseKeys(fixture, {deep: true});
	});
});
