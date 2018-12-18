#!/usr/bin/env node

const path = require('path')
const dirname = __dirname

const action = process.argv[2],
      intSrcDir = process.argv[3] || 'shared',
      extAppDir = process.argv[4] || 'shared'

const ACTION_EXPORT = 'in', ACTION_IMPORT = 'out'

if (action !== ACTION_EXPORT && action !== ACTION_IMPORT) {
  console.log('action parameter not available')
  process.exit(1)
}// .guard ACTION_EXPORT or ACTION_IMPORT

const intPath = `${dirname}/src/${intSrcDir}/`
console.log('internal folder:', `/src/${intSrcDir}/`)

const extPath = path.join(__dirname, '..' , extAppDir)
console.log('external folder:', extPath)

const { spawn } = require('child_process')
let rsync

switch (action) {
  case ACTION_IMPORT:
    rsync = spawn( 'rsync', [ '-avu', extPath, intPath] )
    break
  default: //ACTION_EXPORT
    rsync = spawn( 'rsync', [ '-avu', intPath, extPath] )
}// .switch

// rsync.stdout.on( 'data', data => console.log(`stdout: ${data}`) )

rsync.stderr.on( 'data', data => console.log( `stderr: ${data}`) )

rsync.on( 'close', code => {
  if (code === 0) {
    console.log(`sync ${action} OK`)
  } else {
    console.log(`sync process err, exited with code ${code}`)
  }
} )// .rsync on close
