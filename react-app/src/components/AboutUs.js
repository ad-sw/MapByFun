import React, { useEffect, useState } from 'react';

const AboutUs = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
          setIsLoaded(true)
    }, [setIsLoaded]);

    return(<>
      {isLoaded &&(
        <div className="underConstruction">
            <div className="inner"><br></br>
                <div className="h404">About</div>
                <div className="textInner">
                This is where a description of this web project will go.<br></br>
                Essentially better formatted <i><a href="https://github.com/ad-sw/MapByFun">readme</a></i> information.
                </div>
            </div>
        </div>
      )}
    </>
    )
}

export default AboutUs;
