import React from "react";
import pic from '../images/Syed-Rizvi.png'
class About extends React.Component {
    render() {
        return (
            <div className="About">
                <h3>
                    About Me
                </h3>
                <div className="AboutImageDiv">
                    <img src={pic} className="AboutImage" alt="syed-Pic" />
               </div>
                <div  >
                <p>
        I am a trained Full Stack Web Developer and a Process Engineering Consultant. I may change my profession to become a full time Web Developer, depending on the
        opportunities available to me in the future. I, however, intend to leverage my engineering background to develop or manage web applications in engineering or 
        FinTech areas.
                </p>
            </div>
            </div>
        )
    }

}
export default About;