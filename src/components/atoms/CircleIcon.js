import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CircleIcon = ({skillName}) => {
        return (
            <div>
                 <p><FontAwesomeIcon icon="check-circle" color="green" /> {skillName}</p>
            </div>
        )
}

export default CircleIcon
