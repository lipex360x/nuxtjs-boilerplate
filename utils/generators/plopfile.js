const generator = require('./_generator')
const pagesGenerator = require('./pages')

module.exports = function (plop) {
  plop.setGenerator('Generator', generator)
  plop.setGenerator('Pages', pagesGenerator)
}
