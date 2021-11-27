const pagesGenerator = require('./pages')

module.exports = function (plop) {
  plop.setGenerator('Pages', pagesGenerator)
}
