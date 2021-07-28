import React from "react";
import gitlogo from '../images/git192.png'
import llogo from '../images/llink192.png'
class Header extends React.Component {
    render() {
        return (
            <div className="Footer">	
     <a href='https://github.com/rizvi5a'>  
     <img src={gitlogo} className="smallImage" alt="github"/></a>
     <a href="https://www.linkedin.com/in/rizvi5a">
     <img src={llogo} className="smallImage" alt="linkedin"/> </a>
            </div>
        )
    }

}
export default Header;