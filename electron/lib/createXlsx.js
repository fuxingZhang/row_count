const XlsxTemplate = require('xlsx-template');
const fs = require('fs');
const path = require('path');
// const isDev = require('./isDev');
// const templatePath = `.${isDev ? '' : '/resources/app.asar'}/lib/template/template.xlsx`;
/**
 * package.json
 * window ==> set NODE_ENV=development&& electron .
 * POSIX shell ==> NODE_ENV=development electron .
 */
const templatePath = `.${process.env.NODE_ENV === 'development' ? '' : '/resources/app.asar'}/lib/template/template.xlsx`;
const file = fs.readFileSync(templatePath);
const template = new XlsxTemplate(file);
const sheetNumber = 1;

function createXlsx(data) {
  template.substitute(sheetNumber, data);
  const stringBlob = template.generate();
  const xlsx = Buffer.from(stringBlob, 'binary');
  const filePath = `./xlsx/文件目录${path.basename(data.dir)}行数统计结果.xlsx`;

  try {
    fs.writeFileSync(filePath, xlsx);
  } catch (error) {
    if (error.code === 'ENOENT') {
      fs.mkdirSync('./xlsx')
      fs.writeFileSync(filePath, xlsx);
    } else {
      console.log(error);
    }
  }

  console.log(`create xlsx file completed: ${filePath}`);
  return path.resolve(filePath)
}

module.exports = createXlsx
