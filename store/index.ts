import { Store } from 'vuex'
import { initialize } from './_initialize'

const initializer = (store: Store<any>) => initialize(store)

export const plugins = [initializer]

export * from './_initialize'
