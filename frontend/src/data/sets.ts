import a1 from '../images/a1.png'
import a2 from '../images/a2.png'
import b1 from '../images/b1.png'
import b2 from '../images/b2.png'
import c1 from '../images/c1.png'

export type EnglishSet = {
  id: number
  setName: string
  title: string
  level: string
  status: string
  image: string
  starsToUnlock: number
  isUnlocked: boolean
}

export const imageMap: any = {AA1: a1, AB1: a1, AC1: a1, A2: a2, B1: b1, B2: b2, C1: c1}
