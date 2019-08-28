/**
 * row count
 */
const fs = require('fs');
const path = require('path');

class RowCount {
  constructor({ dir, extensions = [], excludeSubDir = [] }) {
    this.dir = dir;
    this.extensions = extensions;
    this.excludeSubDir = excludeSubDir;
  }

  getFilePath(dir) {
    const result = [];
    const paths = fs.readdirSync(dir);

    for (const item of paths) {
      const filepath = path.join(dir, item);
      const isDir = fs.statSync(filepath).isDirectory();

      if (isDir) {
        if (!this.excludeSubDir.includes(item)) result.push(...this.getFilePath(filepath));
      } else {
        const extname = path.extname(filepath);
        // if(this.extensions.length === 1 && filepath.endsWith(this.extensions[0])) result.push(filepath);
        if (this.extensions.includes(extname)) result.push(filepath);
      }
    }

    return result
  }

  getAllCount() {
    const paths = this.getFilePath(this.dir);
    const result = [];
    let total = 0;

    for (const _path of paths) {
      const count = this.getOneCount(_path);
      const name = path.basename(_path);
      total += count;
      result.push({ name, count });
    }

    return { result, total }
  }

  getOneCount(path) {
    const buf = fs.readFileSync(path);
    const data = buf.toString();

    // const count = data.split('\r\n').length;
    const count = data.split('\n').length;

    return count
  }
}

module.exports = RowCount