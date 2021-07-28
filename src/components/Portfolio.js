import React from "react";
import proj1 from '../images/Project-1.png'
import proj2 from '../images/project-2.png'
import pass from '../images/Password-Generator.png'
import quiz from '../images/Code-Quiz.png'
import note from '../images/Note-Taker.png'
import workout from '../images/Workout-Traker.png'
class Portfolio extends React.Component {

    render() {
        return (
            <div  className="Portfolio">
                <div>
                    <span>
                    <a href="https://github.com//the64man1/Gooberville-Foods">
                    <img src={proj1}  alt="Project-1" /></a> 
                         </span>
                    <span>
                      <a href='https://github.com/kthendavid04/gallery'>
                     <img src={proj2}  alt="project-2" /> </a>
                    </span>
                </div>
                <div>
               <span>
             <a href="https://github.com/rizvi5a/PasswordGen">
                  <img src={pass} alt="password-Gen" /> </a>
               </span>
                <span>
             <a href="https://github.com/rizvi5a/Code-Quiz"> 
              <img src={quiz} alt="Code-quiz"/></a>
                        
                    </span>
                </div>
                <div>
                    <span>
                   <a href="https://github.com/rizvi5a/Note-Taker">
                        <img src={note} alt="Note-Taker"/> </a>
                    </span>
                    <span>
                        
                      <a href="https://github.com/rizvi5a/tracker">  
                      <img src={workout} alt="Workout-Traker"/> </a>
                    </span>
                </div>
                

            </div>
        )
    }

}
export default Portfolio;