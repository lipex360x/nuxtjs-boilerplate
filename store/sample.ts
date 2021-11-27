import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'sample', stateFactory: true, namespaced: true })
export default class Sample extends VuexModule {
  private count = 0

  public get $count() {
    return this.count
  }

  @Mutation
  private INCREMENT(number: number) {
    this.count += number
  }

  @Action
  public increment() {
    this.context.commit('INCREMENT', 5)
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
