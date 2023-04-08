import './style.scss'
import 'src/components/PlateAppearance/style.scss'
import {
  defineComponent,
  PropType,
  h,
} from 'vue'
import { Marble } from 'src/components/PlateAppearance'
import { MarbleType } from 'src/types'

const ColorPalette = defineComponent({
  // props: {},
  emits: {},
  setup(props, { emit }) {
    return () => h(
      'div',
      { class: 'color-palette' },
      [
        h(Marble, { batted: MarbleType.Orange }),
        h(Marble, { batted: MarbleType.Purple }),
        h(Marble, { batted: MarbleType.Green }),
        h(Marble, { batted: MarbleType.Yellow }),
        h(Marble, { batted: MarbleType.Blue }),
        h(Marble, { batted: MarbleType.Pink }),
      ]
    )
  },
})

export { ColorPalette }
