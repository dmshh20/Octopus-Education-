import {type ReactNode} from 'react'
import { handleOffScroll } from '../hooks/handleOffScroll'
import { handleEscape } from '../hooks/handleEscape'

interface UnlockedSet {
    children: ReactNode
    open: any
    onClose: any
}

const UnlockedSet = ({children, open, onClose}: UnlockedSet) => {

  handleOffScroll(open)
  handleEscape(open, onClose)

    if (!open) return null

  return (
    <div className='overlay_style' onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()} className='unlockedInsideScreen'>
                      <i onClick={onClose} className="fa-solid fa-xmark unlocked-set"></i>

          {children}
          </div>
    </div>
  )
}

export default UnlockedSet
