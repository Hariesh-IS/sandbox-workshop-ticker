const test = require('node:test');
const assert = require('node:assert');
const { applyDiscount, formatCents } = require('../lib/pricing');

test('applies a whole-percent discount', () => {
  assert.strictEqual(applyDiscount(1000, 15), 850);
});

test('rounds half a cent up', () => {
  assert.strictEqual(applyDiscount(1001, 50), 501);
});

test('rejects out-of-range discounts', () => {
  assert.throws(() => applyDiscount(1000, 101), RangeError);
});

test('formats cents as dollars', () => {
  assert.strictEqual(formatCents(123456), '$1234.56');
});
