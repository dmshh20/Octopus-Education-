import { type ReactNode } from 'react'; 
import './Modal.css';
import { handleEscape } from '../hooks/handleEscape';
import { handleOffScroll } from '../hooks/handleOffScroll';

interface ModalProps {
    open: boolean
    children: ReactNode
    onClose: () => void
    error: () => void
}

const Modal = ({ open, children, onClose, error }: ModalProps) => {

    
    handleOffScroll(open)
    handleEscape(open, onClose)

    if (!open) return null;

    const handleClose = () => {
        error()
        onClose()
    }

    return (
        <>
            <div className='overlay_style' onClick={handleClose} />
            <div className='modalStyles' onClick={(e) => e.stopPropagation()}>
                <button onClick={handleClose} className='closeModal'><i className="fa-solid fa-xmark"></i></button>
                {children}
            </div>
        </>
    );
}

export default Modal;