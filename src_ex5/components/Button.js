import React from 'react'
import '../style/Mainmenu.css'


export default function Button({ parentCallback, countVote, textBtn }) {

    const onTrigger_UpVote = () => {
        parentCallback(countVote + 1)
    }
    const onTrigger_DownVote = () => {
        parentCallback(countVote - 1)
    }
    return (
        <div className='btn-container'>
            <button className='btn' onClick={onTrigger_UpVote}>Click to Vote</button>
            <div className='display-vote'>{textBtn}</div>
            <button className='btn' onClick={onTrigger_DownVote}>Click to Unvote</button>
        </div>
    )
}