// All money is handled as integer cents.

function applyDiscount(cents, percent) {
  if (!Number.isInteger(percent) || percent < 0 || percent > 100) {
    throw new RangeError('percent must be an integer from 0 to 100');
  }
  return Math.round((cents * (100 - percent)) / 100);
}

function formatCents(cents) {
  return '$' + (cents / 100).toFixed(2);
}

module.exports = { applyDiscount, formatCents };
