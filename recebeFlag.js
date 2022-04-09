const getFlag = require('./pegaFlag')

const args = process.args

const retorno = getFlag.getFlag(args)

console.log(retorno)