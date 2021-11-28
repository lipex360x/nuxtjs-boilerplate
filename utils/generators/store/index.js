/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */

const capitalize = require('../_utils/capitalize')

module.exports = {
  description: 'Generate a Store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Store Module Name',
      validate: (value) => {
        if (!value) {
          return 'Value is required'
        }
        return true
      }
    }

    // snippet: promptTemplate
  ],

  actions: (data) => {
    const file = {
      path: `../../store`,
      name: data.name,
      className: capitalize(data.name),
      class: `${data.type + 's'}-${data.name.toLowerCase()}`,
      scripts: data.scripts
    }

    const action = [
      {
        type: 'add',
        path: `${file.path}/${file.name}.ts`,
        data: { file },
        templateFile: './store/templates/store.hbs'
      },

      function () {
        return `File ${data.name} created`
      }
    ]
    return action
  }
}
