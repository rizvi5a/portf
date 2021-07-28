import React from "react";
import '../App.css';
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            
            message:"", 
            alert:""
        }
    }
    emailChangeHandler= (e)=>{
        this.setState ({email:e.target.value});
    }
   
    messageChangeHandler= (e)=>{
       
        this.setState ({message:e.target.value});
    }
    sendContact= ()=>{
       // const email=document.getElementById("email").value;
       const email=this.state.email;
        if (!this.validateEmail(email))
        {
            this.setState({alert:"Invalid email"});
            return;
        }
       
        const message=this.state.message;
       
        const data= {email:email,message:message};
        console.log (data)
        // Send to server...
        this.setState({alert:"Post to server: "+JSON.stringify(data)});
    }
    validateEmail=(email) =>{
        // const re=/.+@.+\..+/,
 const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
        return re.test(String(email).toLowerCase());
    }
    render() {
    
        return (
            <div>
                <h3 >Contact Syed</h3>
                <p ><input type='text' id='email' placeholder='email'
                onChange={this.emailChangeHandler} value={this.state.email}/></p>
                
                <p>
                    <textarea id="message" placeholder="message" rows="5" cols="50"
                     onChange={this.messageChangeHandler} value={this.state.message}
                    >

                    </textarea>
                </p>
                <p>{this.state.alert}</p>
                <p><button onClick ={this.sendContact}>Send</button></p>
            </div>
        )
    }

}
export default Contact;