'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import cn from 'classnames'
import styles from './Home.module.css'

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
    <div className={styles.container}>
      <div className={styles['star-container']}>
        <img
          className={styles['icon-star']}
          src="./icon-star.svg"
          alt="icon-star"
        />
      </div>
      <div className={styles.title}>How did we do?</div>
      <p className={styles.comment}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={styles['round-button-container']}>
        {/* ideally we want to iterate through an array and pass values */}
        {/* for a small list, hardcoding is ok */}
        <div
          className={cn(styles['number-container'], {
            [styles.selected]: selection.includes('1'),
          })}
          onClick={handleOnClick}
        >
          1
        </div>
        <div
          className={cn(styles['number-container'], {
            [styles.selected]: selection.includes('2'),
          })}
          onClick={handleOnClick}
        >
          2
        </div>
        <div
          className={cn(styles['number-container'], {
            [styles.selected]: selection.includes('3'),
          })}
          onClick={handleOnClick}
        >
          3
        </div>
        <div
          className={cn(styles['number-container'], {
            [styles.selected]: selection.includes('4'),
          })}
          onClick={handleOnClick}
        >
          4
        </div>
        <div
          className={cn(styles['number-container'], {
            [styles.selected]: selection.includes('5'),
          })}
          onClick={handleOnClick}
        >
          5
        </div>
      </div>
      <button className={styles['submit-button']} onClick={handleOnSubmit}>
        Submit
      </button>
    </div>
  )
}
