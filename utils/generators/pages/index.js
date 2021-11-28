/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  description: 'Create a Page',

  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Type Page name:',
      validate: (value) => {
        if (!value) {
          return 'Name is required'
        }
        return true
      }
    },

    {
      type: 'input',
      name: 'layout',
      message: 'Type the layout name',
      default: 'default'
    }
  ],

  actions: (data) => {
    const template = 'page'

    const file = {
      path: `../../pages`,
      name: data.name,
      class: `${data.type + 's'}-${data.name.toLowerCase()}`,
      scripts: data.scripts
    }

    const action = [
      {
        type: 'add',
        path: `${file.path}/${file.name}.vue`,
        data: { file },
        templateFile: `./pages/templates/${template}.hbs`
      },

      function (data) {
        return `Page ${data.name} created`
      }
    ]
    return action
  }
}
