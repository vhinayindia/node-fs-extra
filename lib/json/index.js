'use strict'

const u = require('universalify').fromPromise
const jsonFile = require('./jsonfile')
const readJsonFile = jsonFile.readJson

jsonFile.readJson = u(async (file, options = {}) => {
  try {
    return await readJsonFile(file, options)
  } catch (err) {
    if (options && options.throws === false) return null
    throw err
  }
})

jsonFile.outputJson = u(require('./output-json'))
jsonFile.outputJsonSync = require('./output-json-sync')
// aliases
jsonFile.outputJSON = jsonFile.outputJson
jsonFile.outputJSONSync = jsonFile.outputJsonSync
jsonFile.writeJSON = jsonFile.writeJson
jsonFile.writeJSONSync = jsonFile.writeJsonSync
jsonFile.readJSON = jsonFile.readJson
jsonFile.readJSONSync = jsonFile.readJsonSync

module.exports = jsonFile
