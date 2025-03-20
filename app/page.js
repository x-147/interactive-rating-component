'use client'

import { useState } from 'react'

export default function Home() {
  const [selection, saveSelection] = useState([])

  const handleOnClick = (e) => {
    console.log('selection: ', selection)
    const value = e.target.textContent
    if (selection.includes(value)) {
      const newSelection = selection.filter((val) => val !== value)
      saveSelection(() => newSelection)
    } else {
      saveSelection(() => selection.concat(value))
    }
  }

  const handleOnSubmit = () => {
    console.log('selection: ', selection)
    saveSelection([])
  }

  return (
    <div className="container">
      <div className="star-container">
        <img src="./icon-star.svg" alt="icon-star" />
      </div>
      <div className="title">How did we do?</div>
      <p className="comment">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="round-button-container">
        <div className="number-container" onClick={handleOnClick}>
          1
        </div>
        <div className="number-container" onClick={handleOnClick}>
          2
        </div>
        <div className="number-container" onClick={handleOnClick}>
          3
        </div>
        <div className="number-container" onClick={handleOnClick}>
          4
        </div>
        <div className="number-container" onClick={handleOnClick}>
          5
        </div>
      </div>
      <button onClick={handleOnSubmit}>Submit</button>
    </div>
  )
}
