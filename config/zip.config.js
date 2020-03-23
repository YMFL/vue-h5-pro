const packageInfo = require('../package.json')
const compressing = require('compressing')
const fs = require('fs')
const del = require('delete')

const name = packageInfo.name
const version = packageInfo.qaVersion

function main () {
  // 删除文件
  del.sync(`${name}-V*`, { force: true })

  // 压缩
  try {
    fs.rename('dist', `${name}-V${version}`, () => {})
    compressing.zip
      .compressDir(`${name}-V${version}`, `${name}-V${version}.zip`)
      .then(() => {
        console.log(`打包${name}-V${version}.zip成功`)
        fs.rename(`${name}-V${version}`, 'dist', () => {})
      })
      .catch(err => {
        console.error(err)
        fs.rename(`${name}-V${version}`, 'dist', () => {})
      })
  } catch (error) {
    console.error(error)
  }
}
main()
