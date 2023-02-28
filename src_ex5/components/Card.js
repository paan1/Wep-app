import React, { useState } from 'react'
import '../style/Mainmenu.css'
import Button from './Button'


export default function Card({ food }) {

  const [count, setcount] = useState(0)
  const [displayText, setDisplayText] = useState('MIN')

  const handleCallback = (childVote) => {
    setcount(childVote)
    if (childVote > 10) {
      alert('Cannot Vote more')
      setcount(childVote - 1)
    }
    else if (childVote == 10) {
      updateText('MAX')
    }
    else if (childVote > 0 && childVote <= 9) {
      updateText(childVote.toString())
    }
    else if (childVote == 0) {
      updateText('MIN')
    }
    else {
      alert('Cannot Unvote')
      setcount(childVote + 1)
    }
  }

  const updateText = (text) => {
    setDisplayText(text)
  }

  return (
    <div className='card-container'>
      <div className='food-card'>
        <div className='info'>
          <div className='food-text'>
            <h2>{food.type}</h2>
            <h4>{food.name}</h4>
            <p>{food.detail}</p>
          </div>

          <div className='food-img'>
            <img src={food.img} />
          </div>
        </div>
        <Button parentCallback={handleCallback} countVote={count} textBtn={displayText} />
      </div>
    </div>
  )
}