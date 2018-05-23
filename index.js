const args = require('minimist')(process.argv.slice(2))
const error = require('./util/error')

module.exports = () => {
  let cmd = args._[0] || 'sync'

  if (args.version || args.v) cmd = 'version'
  else if (args.help || args.h) cmd = 'help'

  switch (cmd) {
    case 'help':
      require('./cmds/help')(args)
      break

    case 'version':
      require('./cmds/version')(args)
      break

    case 'sync':
      require('./cmds/sync')(args)
      break

    default:
      error(`"${cmd}" is not a valid command.`, true)
      break
  }
}
