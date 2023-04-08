import { UmpireCall } from 'src/types'
import './style.scss'
import {
  defineComponent,
  PropType,
  h,
} from 'vue'

const JumbotronIndicator = defineComponent({
  props: {
    call: String as PropType<UmpireCall>
  },
  setup(props) {
    return () => h('div', {})
  }
})

const JumbotronBox = defineComponent({
  // props: {},
  setup(props, { emit }) {
    return () => h(
      'div',
      { class: 'jumbotron-box' },
      [
        h(
          JumbotronIndicator,
          {
            class: {
              'jumbotron-indicator': true,
              'jumbotron-indicator__out': false,
              'jumbotron-indicator__ball': false,
              'jumbotron-indicator__hit': true,
            }
          }
        ),
        h(
          JumbotronIndicator,
          {
            class: {
              'jumbotron-indicator': true,
              'jumbotron-indicator__out': false,
              'jumbotron-indicator__ball': true,
              'jumbotron-indicator__hit': false,
            }
          }
        ),
        h(
          JumbotronIndicator,
          {
            class: {
              'jumbotron-indicator': true,
              'jumbotron-indicator__out': true,
              'jumbotron-indicator__ball': false,
              'jumbotron-indicator__hit': false,
            }
          }
        ),
        h(
          JumbotronIndicator,
          {
            class: {
              'jumbotron-indicator': true,
              'jumbotron-indicator__out': true,
              'jumbotron-indicator__ball': false,
              'jumbotron-indicator__hit': false,
            }
          }
        )
      ]
    )
  },
})

export { JumbotronBox }
