/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  description: 'Generate Components',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select a component type',
      choices: () => [
        { name: 'Atom', value: 'atom' },
        { name: 'Boson', value: 'boson' },
        { name: 'Molecule', value: 'molecule' },
        { name: 'Organism', value: 'organism' },
        { name: 'Quark', value: 'quark' },
        { name: 'Template', value: 'template' }
      ]
    },

    {
      type: 'input',
      name: 'name',
      message: 'Type the Component Name',
      validate: (value) => {
        if (!value) {
          return 'Component Name required'
        }
        return true
      }
    }
  ],

  actions: (data) => {
    const path = `../../components/${data.type + 's'}/`
    const file = '{{ pascalCase name}}.vue'
    const filePath = path + file

    const action = [
      {
        type: 'add',
        path: filePath,
        templateFile: './components/templates/{{type}}.hbs'
      },
      function (data) {
        return `File ${data.name} created`
      }
    ]

    return action
  }
}
