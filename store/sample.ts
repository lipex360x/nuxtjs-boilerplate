import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({ name: 'sample', stateFactory: true, namespaced: true })
export default class Sample extends VuexModule {
  private message = 'Sample Store'

  public get $message() {
    return this.message
  }

  @Mutation
  public SET_MESSAGE(message: string) {
    this.message = message
  }

  @Action
  public setMessage(message: string) {
    this.context.commit('SET_MESSAGE', message)
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
