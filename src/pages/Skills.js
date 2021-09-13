import React from 'react'
import SkillLists from '../components/molecules/SkillLists'



const Skills = () => {

        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <div className="row">
                <div className="column">
                    <SkillLists
                    skillTitle = "Programming Languages"
                    skillName1 = " Javascript"
                    skillName2 = " Java"
                    skillName3 = " Dart"
                    skillName4 = " PHP"
                    />
                </div>
                <div className="column">
                    <SkillLists
                    skillTitle = "Libraries, Frameworks & Tools"
                    skillName1 = " React"
                    skillName2 = " Flutter"
                    skillName3 = " Hapi"
                    skillName4 = " Figma"
                    />
                </div>
                
            </div>
            </div>
            )
    }
    
    export default Skills
    