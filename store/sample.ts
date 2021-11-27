import { Module, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'sample', stateFactory: true, namespaced: true })
export default class Sample extends VuexModule {
  private message = 'Hello NuxtJS'

  public get $message() {
    return this.message
  }

  // @Action
  // public async index() {}

  // @Action
  // public async create() {}

  // @Action
  // public async show() {}

  // @Action
  // public async update() {}

  // @Action
  // public async destroy() {}
}
