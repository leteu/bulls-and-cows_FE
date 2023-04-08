import './style.scss'
import {
  defineComponent,
  PropType,
  h,
} from 'vue'
import { Marble, JumbotronBox } from '.'
import { InningBatted, MarbleType } from 'src/types'

const MarblePlace = h('div', { class: 'marble-place' })

const PlateAppearance = defineComponent({
  props: {
    value: {
      type: Object as PropType<InningBatted>,
      default: (): InningBatted => ({
        first: undefined,
        second: undefined,
        third: undefined,
        fourth: undefined,
      })
    }
  },
  emits: {},
  setup(props, { emit }) {
    return () => h(
      'div',
      {
        class: {
          'plate-appearance': true
        }
      },
      [
        h(
          'div',
          {
            class: {
              'marble-container': true
            }
          },
          [
            props.value.first ? h(Marble, { batted: props.value.first }) : MarblePlace,
            props.value.second ? h(Marble, { batted: props.value.second }) : MarblePlace,
            props.value.third ? h(Marble, { batted: props.value.third }) : MarblePlace,
            props.value.fourth ? h(Marble, { batted: props.value.fourth }) : MarblePlace,
          ]
        ),
        h(JumbotronBox)
      ]
    )
  },
})

export { PlateAppearance }
