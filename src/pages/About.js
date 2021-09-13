import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class About extends Component {
    constructor(){
            super()
            this.state = {
                firstName : "Iskandar",
                lastName : "Zulkarnaen",
                phoneNumber : "+6283824503589",
                emailAddress : "Silverzulkarnaen@gmail.com",
                quotes : "I started my journey in the computer world starting in" +
                "high school when I majored in computer and network engineering, now"+
                " I’m 21 years old, Pursuing my Computer Science Degree in University"+
                " of Singaperbangsa Karawang.  Mobile development is my center of interest,"+
                " i always love the idea of cross-platform development. I am also interested"+
                " in machine learning and data mining.",
                githubLink : "https://github.com/SilverIZ",
                linkedinLink : "https://www.linkedin.com/in/iskandar-zulkarnaen-3667b8177/",
                whatsappLink : "https://api.whatsapp.com/send/?phone=6283824503589"
            }
        }
    render() {
        
        return (
            <div className="condiv">
            <h1><strong className="colortext"> {this.state.firstName} </strong>{this.state.lastName}</h1>
            <h3>{this.state.phoneNumber} | <strong className="colortext">{this.state.emailAddress}</strong></h3>
            <br></br>
            <p>
                {this.state.quotes}
            </p>
            <a href={this.state.githubLink}>
            <FontAwesomeIcon icon={['fab', 'github']} size="3x" color="black" className="subtopic" />
            </a> 
            <a href={this.state.linkedinLink}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" color="blue" className="subtopic" />
            </a>
            <a href={this.state.whatsappLink}>
            <FontAwesomeIcon icon={['fab', 'whatsapp']} size="3x" color="green" className="subtopic" />
            </a>
            </div>
            )
        }
    }
    
export default About
    