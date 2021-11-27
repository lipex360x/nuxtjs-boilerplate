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
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../pages/{{pascalCase name}}.ts',
      templateFile: './pages/templates/page.hbs'
    }
  ]
}
