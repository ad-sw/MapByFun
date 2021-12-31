import React from "react";

const AboutMe = () =>{
    return(
    <div className='footer'>
        <div className="AboutMe">
        <h4 id="author">Author:</h4>
            <div className="linkss">
            <a id='linkedin' href="https://linkedin.com/in/ad-sw" alt="LinkedIn">
                <img src="https://user-images.githubusercontent.com/86431563/147783547-d6a56001-b07b-4450-876f-dcdddaf4d5fc.png" alt="LinkedIn" width="30" height="30"></img>
              </a>
              <a id='github' href="https://github.com/ad-sw/MapByFun" alt="GitHub">
                <img src="https://user-images.githubusercontent.com/86431563/147783496-18d3941e-1352-48bc-a545-34c75abd1f0c.png" alt="GitHub" width="28" height="28"></img>
              </a>
            </div>
        </div>
        </div>
    )
}

export default AboutMe;
