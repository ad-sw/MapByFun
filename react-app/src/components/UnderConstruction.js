import React, { useEffect, useState } from 'react';

const ShopUnderConstruction = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
          setIsLoaded(true)
    }, [setIsLoaded]);

    return(<>
      {isLoaded &&(
        <div className="underConstruction">
            <div className="inner"><br></br>
                <div className="h404">Under Construction</div>
                <div className="textInner">
                Thank you for your patience while we work hard to make this feature by 3000.<br></br>
                Until then we look forward to seeing you on our other features.
                </div><br></br>
                <div><img alt="test" height="500" width="350" src="https://i.pinimg.com/originals/ec/94/fa/ec94fa24a9d4dca2c0d627039763dbaa.png"></img></div>
            </div>
        </div>
      )}
    </>
    )
}

export default ShopUnderConstruction;
