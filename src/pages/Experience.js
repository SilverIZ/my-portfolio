import React, { Component } from 'react'

export default class Experience extends Component {
    constructor(){
        super()
        this.state = {
            jobName1 : "Network Engineer",
            companyName1 : "CV Griya Sarana Informatika",
            yearRange1 : "2017 - 2018",
            jobName2 : "Network Engineer Intern",
            companyName2 : "PT Telkom Pagongan Cirebon",
            yearRange2 : "2015"

        }
    }
    render() {
        return (
            <div className="condiv">
           <h1 className="subtopic">Experience</h1>
            <div className="row">
                <div className="column">
                <h3>{this.state.jobName1}</h3>
                <h5 className="colortext">{this.state.companyName1}</h5>
                </div>
                <div className="column">
                <h4 className="yeardate colortext">{this.state.yearRange1}</h4>
                </div>
            </div>
            <div className="row">
                <div className="column">
                <h3>{this.state.jobName2}</h3>
                <h5 className="colortext">{this.state.companyName2}</h5>
                </div>
                <div className="column">
                <h4 className="yeardate colortext">{this.state.yearRange2}</h4>
                </div>
            </div>
            
            </div>
        )
    }
}
