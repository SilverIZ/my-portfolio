import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AwardIcon({awardName}) {
    return (
        <div>
              <p><FontAwesomeIcon icon="award" color="orange" /> {awardName} </p>
        </div>
    )
}

export default AwardIcon
