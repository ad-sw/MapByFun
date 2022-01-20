import React, { useEffect, useState } from 'react';
import { Modal } from '../components/Context/Modal';
import Pic2Modal from '../components/quickModal';

const AboutUs = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
          setIsLoaded(true)
    }, [setIsLoaded]);

    return(<>
      {isLoaded &&(
        <div className="underConstruction">
          <div className="topoBackground2">
            <br></br>
                <div className="h4042">About</div>
                <div className="aboutBorder"></div>
                <div className="friendDashboardContainer2">
                <div className="textInner2">
                This is a <a className="cloneName" href="https://www.mapmyrun.com/" target="_blank" rel="noopener noreferrer">MapMyRun</a> clone that turned into being a just-for-fun "what else can be done"
                frontend-focused project, but derived from the fact that humans use maps near-daily for survival and in small to large life tasks. Maps represent assurance,
                safety, planning, and are largely language-agnostic in the sense that they communicate many data types almost purely through visuals alone in a way that
                everyone can understand, similar to no-code or low-code tools.<p></p>
                The just-for-fun concept was to have a platform that any city or person could design and map out events to be shared with friends or the general public
                that makes the less familiar less daunting, as the unforeseen becomes more seen.<p></p>

                <div className='inline'>
                <button type="submit" onClick={() => setShowModal(true)} className="close2">
                  <img width="525px" height="300px" src="https://user-images.githubusercontent.com/86431563/150277376-0cb2a373-4aa5-435c-8b1b-f440ec60a4d4.png"/>
                </button>
                {isLoaded && showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                      <div className="mapModal">
                        <div className="">
                          <a href="https://www.seattle.gov/arts/experience/art-walks" target="_blank" rel="noopener noreferrer"><img width="1000px" src="https://user-images.githubusercontent.com/86431563/150277376-0cb2a373-4aa5-435c-8b1b-f440ec60a4d4.png"/></a>
                        </div>
                      </div>
                    </Modal>
                )}
                <Pic2Modal/>
                </div>

                {/* <div>
                <button type="submit" onClick={() => setShowModal(true)} className="close2">
                <img className="close2" width="130px" src="https://camo.githubusercontent.com/d159f4d7667907d57e5a08aad2ffc28de0df0146cc2249366e1ef68328e39abc/68747470733a2f2f61727475707068696e6e6579776f6f642e66696c65732e776f726470726573732e636f6d2f323031342f30312f323031345f61727475706d61702e6a7067"/>
                </button>
                {isLoaded && showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                      <div className="mapModal">
                        <div className="">
                          <a href="https://www.seattle.gov/arts/experience/art-walks" target="_blank" rel="noopener noreferrer"><img height="600px" src="https://camo.githubusercontent.com/d159f4d7667907d57e5a08aad2ffc28de0df0146cc2249366e1ef68328e39abc/68747470733a2f2f61727475707068696e6e6579776f6f642e66696c65732e776f726470726573732e636f6d2f323031342f30312f323031345f61727475706d61702e6a7067"/></a>
                        </div>
                      </div>
                    </Modal>
                )}
                </div> */}

                <p></p>
                The City of Seattle's neighborhoods produce monthly maps for their communities during&#160;
                <a className="cloneName" href="https://www.seattle.gov/arts/experience/art-walks" target="_blank" rel="noopener noreferrer">Seattle Art Walks</a> (pre-Covid) to encourage local small-to-medium
                businesses' growth as well as fostering a stronger cross-cultural social fabric for its diverse population, both ethnically and socioeconomically speaking.
                Hundreds to thousands attend throughout the city neighborhoods via these programmed networks.<p></p>
                This project could help smaller-scaled local businesses access greater audiences to those who reside near but are unaware of their existence. If brand
                loyalty and repeat customers stems from trust and familiarity via repeated exposure, something like this could help the newer, smaller, and/or more diverse
                community spaces resonate with more people. I think of it as a bridge between Eventbrite and Google Maps with alternative use for delivery and shipping logistics.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
    )
}

export default AboutUs;
