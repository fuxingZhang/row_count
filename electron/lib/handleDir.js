/**
 * row count
 */
// const { dir, extensions, excludeSubDir } = require('../config');
const getCount = require('./getCount');
const createXlsx = require('./createXlsx');

function handleDir({ dir, extensions, excludeSubDir }) {
  const { result, total } = getCount({ dir, extensions, excludeSubDir });

  console.log({ dir, result, total });

  const xlsxPath = createXlsx({ dir, result, total })

  return xlsxPath
}


module.exports = handleDir
