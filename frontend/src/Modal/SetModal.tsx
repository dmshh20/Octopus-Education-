import { type ReactNode } from 'react'
import './Modal.css'
import { handleEscape } from '../hooks/handleEscape'
import { handleOffScroll } from '../hooks/handleOffScroll'

interface SetModalProps {
    open: boolean
    onClose: () => void 
    children: ReactNode
}

const SetModal = ({open,onClose, children}: SetModalProps) => {

    handleEscape(open, onClose)
    handleOffScroll(open)

    if (!open) return null

  return (
    <>  
        <div className='overlay_style' onClick={onClose}>

            <div className='set-modal-styles' onClick={(e) => e.stopPropagation()}>
                      <i onClick={onClose} className="fa-solid fa-xmark set-modal-fa-xmark"></i>
                    {children}
            </div>

        </div>

    
    </>
  )
}

export default SetModal
