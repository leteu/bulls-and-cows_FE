import { MarbleType } from './MarbleType'

type Inning = number

interface InningBatted {
  first?: MarbleType
  second?: MarbleType
  third?: MarbleType
  fourth?: MarbleType
}

export { Inning, InningBatted }
