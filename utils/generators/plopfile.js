const generator = require('./_generator')
const pages = require('./pages')
const components = require('./components')

module.exports = function (plop) {
  plop.setGenerator('Generator', generator)
  plop.setGenerator('Pages', pages)
  plop.setGenerator('Components', components)
}
