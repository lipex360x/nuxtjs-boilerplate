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
    const action = [
      {
        type: 'add',
        path: '../../pages/{{lowerCase name}}.vue',
        data: { message: `Hello ${data.name}` },
        templateFile: './pages/templates/page.hbs'
      },

      function (data) {
        return `Page ${data.name} created`
      }
    ]
    return action
  }
}
