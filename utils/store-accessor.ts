import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Sample from '@/store/sample'

/* eslint-disable import/no-mutable-exports */
let sample: Sample

const initializeStores = (store: Store<any>): void => {
  sample = getModule(Sample, store)
}

export { initializeStores, sample }
