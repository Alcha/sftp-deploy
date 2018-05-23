const menus = {
  main: `
    sftp-deploy [command] <options>

    sync........ Sync a local directory with a remote one
    version..... Show package version
    help........ Show help menu for a command
  `,
  sync: `
    sftp-deploy sync <options>

    --path, -p ..... The directory containing the files to sync
    --force, -f .... Force all local files to overwrite remote files
    --config, -c ... Path to a config file containing necessary
  `
}

module.exports = args => {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0]
  console.log(menus[subCmd] || menus.main)
}
