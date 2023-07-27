import { createPinia } from 'pinia'
import { useSinglePlayStore } from './single-play-store'
import { useMulitPlayStore } from './multi-play-store'

const store = () => {
  const pinia = createPinia()

  // pinia.use(SomePiniaPlugin)

  return pinia
}

export { store }
export { useSinglePlayStore, useMulitPlayStore }
