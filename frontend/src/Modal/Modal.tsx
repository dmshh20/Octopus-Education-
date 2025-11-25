import { useEffect, type ReactNode } from 'react'; 
import './Modal.css';

interface ModalProps {
    open: boolean
    children: ReactNode
    onClose: () => void
    error: () => void
}

const Modal = ({ open, children, onClose, error }: ModalProps) => {

    useEffect(() => {
        if (open) {
           document.body.classList.add('off-scroll') 
        } else {
            document.body.classList.remove('off-scroll')
        }

        return () => {
            document.body.classList.remove('off-scroll')
        }
    }, [open])
    

    if (!open) return null;

    const handleClose = () => {
        error()
        onClose()
    }

    return (
        <>
            <div className='overlay_style' onClick={handleClose} />

            <div className='modalStyles'>
                <button onClick={handleClose} className='closeModal'><i className="fa-solid fa-xmark"></i></button>
                {children}
            </div>
        </>
    );
}

export default Modal;