import { Jumbotron, UmpireCall } from 'src/types'
import './style.scss'
import { defineComponent, PropType, h } from 'vue'

const JumbotronIndicator = defineComponent({
  props: {
    done: {
      type: Boolean,
    },
    call: {
      type: Number as PropType<UmpireCall>,
    },
  },
  setup(props) {
    return () => h('div', {})
  },
})

const JumbotronBox = defineComponent({
  props: {
    call: {
      type: Array as unknown as PropType<Jumbotron>,
    },
  },
  setup(props, { emit }) {
    return () =>
      h(
        'div',
        { class: 'jumbotron-box' },
        props.call
          ? props.call.map((call) =>
              h(JumbotronIndicator, {
                class: {
                  'jumbotron-indicator': true,
                  'jumbotron-indicator__out': call === UmpireCall.Out,
                  'jumbotron-indicator__ball': call === UmpireCall.Ball,
                  'jumbotron-indicator__strike': call === UmpireCall.Strike,
                },
              })
            )
          : Array.from({ length: 4 }).map(() =>
              h(JumbotronIndicator, {
                class: 'jumbotron-indicator jumbotron-indicator__out',
              })
            )
      )
  },
})

export { JumbotronBox }
