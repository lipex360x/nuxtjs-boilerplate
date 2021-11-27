import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Sample from './sample'

let sample: Sample

const initialize = (store: Store<any>): void => {
  sample = getModule(Sample, store)
}

export { initialize, sample }
