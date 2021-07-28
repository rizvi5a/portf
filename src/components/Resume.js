import React from "react";
import resume from '../images/Syed-Rizvi-Resume.pdf'
class Resume extends React.Component {
    render() {
        return (
            <div className="Resume">
                <h1>
                    Resume
                </h1>
                <ul>
                <li>
                    <h2> Front-End Technologies Skills</h2>
                </li>
                
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Jquarey</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Responsive Design</li>
                <li>
                    <h2> Back-End Technologies Skills</h2>
                </li>
                <li>Express Api</li>
                <li>Node</li>
                <li> Mysql, Sequelize</li>
                <li>MongoDB</li>
                
                <li>
                <a href={resume}> Resume</a>
                </li>
                
        </ul>
            </div>
        )
    }

}
export default Resume;