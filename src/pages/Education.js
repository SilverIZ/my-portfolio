import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Education extends Component {
    constructor(){
        super()
        this.state = {
            instituteName1 : "University of Singaperbangsa Karawang",
            majorName1 : "Computer Science",
            yearRange1 : "2018 - Present",
            instituteName2 : "SMKN 1 Jamblang",
            majorName2 : "Computer and Network Engineering",
            yearRange2 : "2014 -2017"

        }
    }
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Education</h1>
            <div className="row">
                <FontAwesomeIcon icon="university" size="2x" color="orange" />
                <div className="column">
                <h3>{this.state.instituteName1}</h3>
                <h5 className="colortext">{this.state.majorName1}</h5>
                </div>
                <div className="column">
                <h4 className="yeardate colortext">{this.state.yearRange1}</h4>
                </div>
            </div>
            <div className="row">
                <FontAwesomeIcon icon="university" size="2x" color="orange" />
                <div className="column">
                <h3>{this.state.instituteName2}</h3>
                <h5 className="colortext">{this.state.majorName2}</h5>
                </div>
                <div className="column">
                <h4 className="yeardate colortext">{this.state.yearRange2}</h4>
                </div>
            </div>
                    
            </div>
            )
        }
    }
    
export default Education
    