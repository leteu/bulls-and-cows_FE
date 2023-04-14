import './style.scss'
import 'src/components/PlateAppearance/style.scss'
import {
  defineComponent,
  h,
} from 'vue'
import { Marble } from 'src/components/PlateAppearance'
import { MarbleType } from 'src/types'

const ColorPalette = defineComponent({
  emits: {
    'click:marble'(num: MarbleType, e: Event) {
      return { num, e }
    }
  },
  setup(props, { emit }) {
    return () => h(
      'div',
      { class: 'color-palette' },
      [
        h(Marble, { batted: MarbleType.Orange, onClick: (e: Event) => emit('click:marble', MarbleType.Orange, e) }),
        h(Marble, { batted: MarbleType.Purple, onClick: (e: Event) => emit('click:marble', MarbleType.Purple, e) }),
        h(Marble, { batted: MarbleType.Green, onClick: (e: Event) => emit('click:marble', MarbleType.Green, e) }),
        h(Marble, { batted: MarbleType.Yellow, onClick: (e: Event) => emit('click:marble', MarbleType.Yellow, e) }),
        h(Marble, { batted: MarbleType.Blue, onClick: (e: Event) => emit('click:marble', MarbleType.Blue, e) }),
        h(Marble, { batted: MarbleType.Pink, onClick: (e: Event) => emit('click:marble', MarbleType.Pink, e) }),
      ]
    )
  },
})

export { ColorPalette }
