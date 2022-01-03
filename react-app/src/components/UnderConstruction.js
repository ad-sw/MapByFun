import React, { useEffect, useState } from 'react';

const UnderConstruction = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
          setIsLoaded(true)
    }, [setIsLoaded]);

    return(<>
      {isLoaded &&(
        <div className="underConstruction">
            <div className="inner">
                <div className="h404">Under Construction</div>
                <div className="textInner">
                Thank you for your patience while we work hard to make this feature by 3000.<br></br>
                Until then we look forward to seeing you on our other features.
                </div>
                <div><img alt="test" height="550" width="365" src="https://i.pinimg.com/originals/1d/c7/f9/1dc7f97fd25ba503520fc6ed4022f75e.jpg"></img></div>
            </div>
        </div>
      )}
    </>
    )
}

export default UnderConstruction;
