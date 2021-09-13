import React from 'react'
import CircleIcon from '../atoms/CircleIcon'


const SkillLists = ({skillTitle, skillName1, skillName2, skillName3, skillName4}) => {
        return (
            <div>
                <h3>{skillTitle}</h3>
                <CircleIcon skillName= {skillName1}/>
                <CircleIcon skillName={skillName2}/>
                <CircleIcon skillName={skillName3}/>
                <CircleIcon skillName={skillName4}/>
            </div>
        )
}

export default SkillLists
