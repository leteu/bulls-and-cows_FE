import { MatchStatus } from 'src/types'
import './style.scss'

import { PropType, computed, defineComponent, h } from 'vue'

const MatchIndicator = defineComponent({
  props: {
    status: {
      type: String as PropType<MatchStatus>,
      default: MatchStatus.Wait,
    },
  },
  setup(props) {
    const status = computed(() => {
      switch (props.status) {
        case MatchStatus.Wait: {
          return 'wait'
        }
        case MatchStatus.Play: {
          return 'play'
        }
        case MatchStatus.End: {
          return 'end'
        }
      }
    })

    const styles = computed(() => `match-status match-status__${status.value}`)

    return () =>
      h(
        'div',
        {
          class: styles.value,
        },
        '',
      )
  },
})

export { MatchIndicator }
