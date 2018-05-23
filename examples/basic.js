const consola = require('../src/cjs')

consola.start('Starting build')

consola.warn('Something is going to happen soon')

consola.withDefaults({additionalStyle: 'underline'}).log('Bla', 'Bla', 'Bla', 'Bla')

setTimeout(() => {
  consola.success('Build succeed in 10 seconds')
  consola.info('Some extra info is here')
  consola.debug('Hum hum hum')
  consola.error(new Error('consola is awesome'))
  consola.fatal('This is the end!')
}, 1500)
