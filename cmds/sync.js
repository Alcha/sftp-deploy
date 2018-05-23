const Client = require('ssh2-sftp-client')
const fs = require('fs-extra')
const ora = require('ora')
const sftp = new Client()

module.exports = async args => {
  const spinner = ora().start()

  try {
    sftp.connect({
      host: 'tron.ninja',
      port: '22',
      username: 'alcha',
      privateKey: await fs.readFile('C:\\Users\\Alcha\\.ssh\\id_rsa')
    }).then(() => {
      return sftp.list('/home/alcha/tron')
    }).then(data => {
      console.log(data, 'The data info.')
      spinner.stop()
    }).catch(err => {
      console.error(err)
      spinner.stop()
    })
  } catch (err) {
    console.error(err)
    spinner.stop()
  }
}
