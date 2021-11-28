const components = require('./components')
const pages = require('./pages')
const store = require('./store')
const entity = require('./entity')
const generator = require('./_generator')

module.exports = function (plop) {
  plop.setGenerator('Components', components)
  plop.setGenerator('Pages', pages)
  plop.setGenerator('Stores', store)
  plop.setGenerator('Entities', entity)
  plop.setGenerator('Generator', generator)
}
