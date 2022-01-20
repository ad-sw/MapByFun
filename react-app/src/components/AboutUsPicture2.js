        import React, { useEffect, useState } from 'react';
import { Modal } from './Context/Modal';

const Picture2Modal = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
          setIsLoaded(true)
    }, [setIsLoaded]);

    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal(false);
      }

    return(<>
    <div>
        <button type="submit" onClick={() => setShowModal(true)} className="close3">
        <img width="127.5px" src="https://camo.githubusercontent.com/d159f4d7667907d57e5a08aad2ffc28de0df0146cc2249366e1ef68328e39abc/68747470733a2f2f61727475707068696e6e6579776f6f642e66696c65732e776f726470726573732e636f6d2f323031342f30312f323031345f61727475706d61702e6a7067"/>
        </button>
        {isLoaded && showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <div className="mapModal">
                <div className="">
                    <a href="https://www.seattle.gov/arts/experience/art-walks" target="_blank" rel="noopener noreferrer">
                    <img height="660px" src="https://camo.githubusercontent.com/d159f4d7667907d57e5a08aad2ffc28de0df0146cc2249366e1ef68328e39abc/68747470733a2f2f61727475707068696e6e6579776f6f642e66696c65732e776f726470726573732e636f6d2f323031342f30312f323031345f61727475706d61702e6a7067"/>
                    </a>
                    <button type="submit" onClick={handleCancel} id="closeBtn">Close</button>
                </div>
                </div>
            </Modal>
        )}
    </div>
    </>)
}

export default Picture2Modal;
