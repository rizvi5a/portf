import React, {} from 'react';
import '../App.css';
function Navigation({ currentTab, handleTabChange}) {
    return (
        <nav>
            <div className="nav-wrapper blue darken-3">
            <ul className="Portfolio">
<li><a href="#about" onClick={() => handleTabChange('About')} 
className={currentTab === 'About' ? 'black-text' : 'white-text'}>About Me</a></li>
 <li><a href="#portfolio" onClick={() => handleTabChange('Portfolio')} 
 className={currentTab === 'Portfolio' ? 'black-text' : 'white-text'}>Protfolio</a></li>
<li><a href="#Resume" onClick={() => handleTabChange('Resume')} 
className={currentTab === 'Resume' ? 'black-text' : 'white-text'}>Resume</a></li>
 <li><a href="#contact" onClick={() => handleTabChange('Contact')} 
 className={currentTab === 'Contact' ? 'black-text' : 'white-text'}>Contact Me</a></li>
            </ul>
            </div>
        </nav>
    )
}
export default Navigation;
