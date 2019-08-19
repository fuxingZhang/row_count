
// C:\Users\star\Desktop\row_count\electron\node_modules\electron\dist\electron.exe
// process.argv0 属性保存当 Node.js 启动时传入的 argv[0] 的原始值的只读副本。
const isDev = process.argv0.includes("node_modules")

// C:\Users\star\Desktop\row_count\electron\app.js
// const isDev = !process.mainModule.filename.includes('app.asar')
module.exports = isDev