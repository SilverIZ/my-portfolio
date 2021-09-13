import React from 'react'
import AwardIcon from '../atoms/AwardIcon'

function AwardList({awardName1, awardName2}) {
    return (
        <div>
                <AwardIcon awardName= {awardName1}/>
                <AwardIcon awardName={awardName2}/>
        </div>
    )
}

export default AwardList
