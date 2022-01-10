import React, { useEffect, useState } from 'react';

const AboutUs = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
          setIsLoaded(true)
    }, [setIsLoaded]);

    return(<>
      {isLoaded &&(
        <div className="underConstruction">
            <div className="inner">
                <div className="h404">About</div>
                <div className="textInner">
                This is where a description of this web project will go.<br></br>
                Essentially better formatted readme information.
                </div>
                <div><img alt="test" height="550" width="365" src=""></img></div>
            </div>
        </div>
      )}
    </>
    )
}

export default AboutUs;
