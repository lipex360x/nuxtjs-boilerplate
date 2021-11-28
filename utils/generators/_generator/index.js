/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  description: 'Plop generate Generators',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Type Generator Name',
      validate: (value) => {
        if (!value) {
          return 'Generator Name is required'
        }
        return true
      }
    },
    {
      type: 'input',
      name: 'template',
      message: 'Type Handlebars Template Name',
      validate: (value) => {
        if (!value) {
          return 'Template Name is required'
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
