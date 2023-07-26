import { defineStore } from 'pinia'
import { Inning, InningBatted, Jumbotron, MarbleType, UmpireCall } from 'src/types'
import { computed, reactive, ref } from 'vue'

const getRandomMarble = (): MarbleType => {
  const keys = Object.keys(MarbleType).filter((k) => !(Math.abs(Number.parseInt(k)) + 1))

  return Math.floor(Math.random() * keys.length + 1)
}

const useSinglePlayStore = defineStore('singlePlayStore', () => {
  const answer = ref<MarbleType[]>()
  const inning = reactive<Map<Inning, InningBatted>>(new Map())
  const currentInning = computed((): { key: Inning; value: InningBatted } => {
    const temp = Array.from(inning)
    const last = temp.pop()

    if (!last) return { key: 0, value: [] }

    const [key, value] = last
    return { key, value }
  })
  const JumbotronUmpireCall = reactive<Map<Inning, Jumbotron>>(new Map())

  const reset = () => {
    inning.clear()
    JumbotronUmpireCall.clear()
    getNewAnswer()
  }

  const getNewAnswer = () => {
    answer.value = Array.from(
      Array.from({ length: 4 }).reduce((acc: Set<MarbleType>) => {
        let random

        for (;;) {
          random = getRandomMarble()

          if (!acc.has(random)) break
        }

        acc.add(random)

        return acc
      }, new Set([])),
    )
  }

  const addMableToInning = (key: Inning, value: MarbleType) => {
    inning.set(key, [...currentInning.value.value, value] as InningBatted)

    if (currentInning.value.value.length === 4) {
      const isWin = checkAnswer(key, currentInning.value.value)

      inning.set(key + 1, [])
      return isWin
    }
  }

  const getInning = (key: Inning) => {
    return inning.get(key)
  }

  const checkAnswer = (key: Inning, batted: InningBatted) => {
    JumbotronUmpireCall.set(
      key,
      batted
        .map((marble, index) => {
          if (answer.value?.[index] === marble) return UmpireCall.Strike
          if (answer.value?.includes(marble)) return UmpireCall.Ball
          return UmpireCall.Out
        })
        .sort((a, b) => b - a) as Jumbotron,
    )

    return JumbotronUmpireCall.get(key)?.every((el) => el === UmpireCall.Strike)
  }

  const getUmpireCall = (key: Inning): Jumbotron => {
    return JumbotronUmpireCall.get(key) || [UmpireCall.Out, UmpireCall.Out, UmpireCall.Out, UmpireCall.Out]
  }

  return {
    inning,
    currentInning,
    JumbotronUmpireCall,

    getNewAnswer,
    addMableToInning,
    getInning,
    getUmpireCall,

    reset,
  }
})

export { useSinglePlayStore }
