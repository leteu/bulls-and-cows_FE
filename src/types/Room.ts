enum MatchStatus {
  Wait = '대기',
  Play = '시작',
  End = '종료',
}

interface Room {
  id: string
  name: string
  match: MatchStatus
  player: string[]
  observer: string[]
}

export type {
  Room
}

export {
  MatchStatus
}
