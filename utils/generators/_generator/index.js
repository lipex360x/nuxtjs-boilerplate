/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  description: 'Plop generate generators',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Generator Name',
      validate: (value) => {
        if (!value) {
          return 'Name is required'
        }
        return true
      }
    },
    {
      type: 'input',
      name: 'template',
      message: 'Template Name',
      validate: (value) => {
        if (!value) {
          return 'Template is required'
        }
        return true
      }
    }
  ],

  actions: (data) => {
    const action = [
      {
        type: 'add',
        path: './{{lowerCase name}}/index.js',
        templateFile: './_generator/templates/index.hbs'
      },

      {
        type: 'add',
        path: './{{lowerCase name}}/templates/{{template}}.hbs'
      },

      function (data) {
        return `Generator ${data.name} created`
      }
    ]

    return action
  }
}
