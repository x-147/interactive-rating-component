'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [selection, saveSelection] = useState('')
  const router = useRouter()

  const handleOnClick = (e) => {
    saveSelection([e.target.textContent])
  }

  const handleOnSubmit = () => {
    router.push(`/submitted?data=${selection}`)

    // reset state
    saveSelection('')
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
        {/* ideally we want to iterate through an array and pass values */}
        {/* for a small list, hardcoding is ok */}
        <div
          className={`number-container ${
            selection.includes('1') ? 'selected' : ''
          }`}
          onClick={handleOnClick}
        >
          1
        </div>
        <div
          className={`number-container ${
            selection.includes('2') ? 'selected' : ''
          }`}
          onClick={handleOnClick}
        >
          2
        </div>
        <div
          className={`number-container ${
            selection.includes('3') ? 'selected' : ''
          }`}
          onClick={handleOnClick}
        >
          3
        </div>
        <div
          className={`number-container ${
            selection.includes('4') ? 'selected' : ''
          }`}
          onClick={handleOnClick}
        >
          4
        </div>
        <div
          className={`number-container ${
            selection.includes('5') ? 'selected' : ''
          }`}
          onClick={handleOnClick}
        >
          5
        </div>
      </div>
      <button onClick={handleOnSubmit}>Submit</button>
    </div>
  )
}
