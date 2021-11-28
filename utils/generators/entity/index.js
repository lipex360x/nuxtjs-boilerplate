/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */

const capitalize = require('../_utils/capitalize')

module.exports = {
  description: 'Generate a Entity',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Type Entity Name',
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
      path: `../../entities`,
      name: data.name,
      class: `${data.type + 's'}-${data.name.toLowerCase()}`,
      scripts: data.scripts
    }

    const action = [
      {
        type: 'add',
        path: `${file.path}/${file.name}.ts`,
        data: { file },
        templateFile: './entity/templates/entity.hbs'
      },

      function (data) {
        return `File ${data.name} created`
      }
    ]
    return action
  }
}
