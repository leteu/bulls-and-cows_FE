import { MarbleType } from './MarbleType'

type Inning = number

type InningBatted =
| []
| [
    MarbleType,
  ]
| [
    MarbleType,
    MarbleType,
  ]
| [
    MarbleType,
    MarbleType,
    MarbleType,
  ]
| [
    MarbleType,
    MarbleType,
    MarbleType,
    MarbleType,
  ]

export { Inning, InningBatted }
