import React, { useEffect } from 'react'; // 👈 Import useEffect
import './Modal.css';

const Modal = ({ open, children, onClose }: any) => {

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

    return (
        <>
            <div className='overlay_style' />

            <div className='modalStyles'>
                <button onClick={onClose} className='closeModal'><i className="fa-solid fa-xmark"></i></button>
                {children}
            </div>
        </>
    );
}

export default Modal;