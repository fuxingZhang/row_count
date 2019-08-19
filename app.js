/**
 * row count
 */
const { dir, extensions, excludeSubDir } = require('./config');
const getCount = require('./src/getCount');
const createXlsx = require('./src/createXlsx');

const { result, total } = getCount({ dir, extensions, excludeSubDir });

console.log({ dir, result, total });

createXlsx({ dir, result, total })
