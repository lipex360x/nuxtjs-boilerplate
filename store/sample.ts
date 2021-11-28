import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({ name: 'sample', stateFactory: true, namespaced: true })
export default class Sample extends VuexModule {
  private message = 'Hello Store'

  public get $message() {
    return this.message
  }

  @Mutation
  public SET_MESSAGE(message: string) {
    this.message = message
  }

  @Action
  public setMessage() {
    this.context.commit('SET_MESSAGE', 'Hello World')
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
