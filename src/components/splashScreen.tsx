
import mobileCheck from "../utils/mobileDetect"

import splashImage from '../images/PKP-house.jpg';

export default function splashScreen() {
    const isMobile = mobileCheck()

    return (
        <div>
            <img src={splashImage} alt="the fraternity house"
            style={{position:"absolute", width:'100vw', height:"auto"}}/>
            { isMobile ? null :  // Dont show title on mobile browser
            <div style={{position:"absolute", top:"30vw", width:"100%", height:"100%"}}>
            <p className="no-select outline-text" style={{fontSize:"4vw", textAlign:"center"}}>
                Pi Kappa Phi - Beta Upsilon Chapter
            </p>  </div>}
        </div>
    )
}