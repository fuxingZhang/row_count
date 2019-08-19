const RowCount = require('./RowCount');

/**
 * 
 * @param {String} dir 文件目录
 * @param {String[]} extensions 扩展名数组
 */
function getCount({ dir, extensions, excludeSubDir }) {
  const rowCount = new RowCount({ dir, extensions, excludeSubDir });

  return rowCount.getAllCount();
}

module.exports = getCount;