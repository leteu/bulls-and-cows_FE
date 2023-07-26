import './style.scss'
import 'src/components/PlateAppearance/style.scss'
import { defineComponent, h, PropType } from 'vue'
import { Marble } from 'src/components/PlateAppearance'
import { InningBatted, MarbleType } from 'src/types'

const ColorPalette = defineComponent({
  emits: {
    'click:marble'(num: MarbleType, e: Event) {
      return { num, e }
    },
  },
  props: {
    used: {
      type: Array as unknown as PropType<MarbleType[]>,
      required: true,
    },
  },
  setup(props, { emit }) {
    return () =>
      h(
        'div',
        { class: 'color-palette' },
        [
          MarbleType.Orange,
          MarbleType.Purple,
          MarbleType.Green,
          MarbleType.Yellow,
          MarbleType.Blue,
          MarbleType.Pink,
        ].map((v) =>
          props.used.includes(v)
            ? h('div', { class: { 'marble-place': true } })
            : h(Marble, {
                batted: v,
                onClick: (e: Event) => emit('click:marble', v, e),
              }),
        ),
      )
  },
})

export { ColorPalette }
