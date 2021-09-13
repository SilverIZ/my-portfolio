import React, { Component } from 'react';
import Navitem from './Navitem';
import profilepic from '../img/34.jpg';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
            <ul>
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <Navitem item="About" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="Experience" tolink="/experience"  activec={this.activeitem}></Navitem>
            <Navitem item="Education" tolink="/education"  activec={this.activeitem}></Navitem>
            <Navitem item="Skills" tolink="/skills"  activec={this.activeitem}></Navitem>
            <Navitem item="Interests" tolink="/interests"  activec={this.activeitem}></Navitem>
            <Navitem item="Awards" tolink="/awards"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    