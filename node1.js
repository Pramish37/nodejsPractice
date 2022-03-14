const lodash = require('lodash');

const item = [1, [2, [3, [4]]]];
const impl = lodash.flattenDeep(item);

console.log(impl);
