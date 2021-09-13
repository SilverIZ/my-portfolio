import React, { Component } from 'react'
import AwardList from '../components/molecules/AwardList'

export default class Awards extends Component {
    constructor(){
        super()
        this.state = {
            awardName1 : " Mikrotik Certified Network Associate",
            awardName2 : " DQ Lab Data Analyst"
        }
    }
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">AWARDS & CERTIFICATIONS</h1>
            <br></br>
            <AwardList
            awardName1 = {this.state.awardName1}
            awardName2 = {this.state.awardName2}
            />
            
            </div>
        )
    }
}
