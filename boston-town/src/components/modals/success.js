import React, { useEffect, useState } from 'react';
import './success.css'; // Create a CSS file to style your modal

const Success = ({ modal }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    console.log("modal => ", modal);

    useEffect(() => {
        if (modal) {
            openModal(); // Open the modal when the 'modal' prop is true
        }
    }, [modal]);

    return (
        <div>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Modal Title</h2>
                        <p>This is a basic modal content.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Success;
