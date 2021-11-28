/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-unused-vars */
const capitalize = require('../_utils/capitalize')

module.exports = {
  description: 'Generate a Component',
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
    },

    {
      type: 'confirm',
      name: 'scripts',
      message: 'Add Nuxt Scripts Tag?',
      default: false
    }
  ],

  actions: (data) => {
    const template = data.type

    const file = {
      path: `../../components/${data.type + 's'}`,
      name: capitalize(data.name),
      class: `${data.type + 's'}-${data.name.toLowerCase()}`,
      scripts: data.scripts
    }

    const action = [
      {
        type: 'add',
        path: `${file.path}/${file.name}.vue`,
        data: { file },
        templateFile: `./components/templates/${template}.hbs`
      },

      function (data) {
        return `File ${data.name} created`
      }
    ]

    return action
  }
}
