import a1 from '../images/a1.png'
import a2 from '../images/a2.png'
import b1 from '../images/b1.png'
import b2 from '../images/b2.png'
import c1 from '../images/c1.png'

export type EnglishSet = {
  id: string
  title: string
  level: string
  status: string
  image: string
}

export const EnglishSets: EnglishSet[] = [
  {id: 'a1-presentsimple', title: 'Present Simple', level: 'A1', status: 'Основи граматики', image: a1},
  {id: 'a1-pastsimple', title: 'Past Simple', level: 'A1', status: 'Основи граматики',image: a1 },
  {id: 'a1-futuresimple', title: 'Future Simple', level: 'A1', status: 'Основи граматики', image:a1},
  {id: 'a2-presentcontinuous', title: 'Present Continuous', level: 'A2', status: 'Базова граматика', image: a2},
  {id: 'b1-presentperfect', title: 'Present Perfect', level: 'B1', status: 'Розширена граматика', image: b1},
  {id: 'b2-conditionals', title: 'Conditionals', level: 'B2', status: 'Складна граматика', image: b2},
  {id: 'c1-passivevoice', title: 'Passive Voice', level: 'C1', status: 'Просунута граматика', image: c1},
] 
