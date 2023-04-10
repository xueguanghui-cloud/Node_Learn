const fs = require('fs')

const writeStream = fs.createWriteStream('./ccc.txt', {
  flags: 'r+',
  start: 5
})

writeStream.write('my name is codexgh.')
writeStream.close()