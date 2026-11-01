const assert = require('node:assert');
const { parseCurl, generateTypes } = require('../bin/cli.js');

console.log('Running curl-to-ts tests...');
const parsed = parseCurl('curl -X POST https://api.example.com/items -H "Content-Type: application/json" -d "{\\"title\\":\\"test\\"}"');
assert.strictEqual(parsed.method, 'POST');
assert.strictEqual(parsed.url, 'https://api.example.com/items');
assert.strictEqual(parsed.headers['Content-Type'], 'application/json');

const ts = generateTypes(parsed, 'CreateItem');
assert(ts.includes('export async function executeCreateItem'), 'Must generate fetch function');
console.log('curl-to-ts tests passed cleanly.');
process.exit(0);
