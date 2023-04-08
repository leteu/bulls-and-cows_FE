import { MarbleType } from 'src/types'
import './style.scss'
import {
  defineComponent,
  PropType,
  h,
} from 'vue'

const Marble = defineComponent({
  props: {
    batted: {
      type: Number as PropType<MarbleType>,
      required: true
    }
  },
  setup(props) {
    return () => h('div', { class: `marble marble-${props.batted}` })
  }
})

export { Marble }
