'use client'

import { useSearchParams } from 'next/navigation'
import styles from './Submitted.module.css'

export default function Submitted() {
  const searchParams = useSearchParams()
  return (
    <div className={styles.container}>
      <img
        className={styles['thank-you-img']}
        src="./illustration-thank-you.svg"
        alt="thank-you"
      />
      <div className={styles.choice}>
        You selected {searchParams.get('data')} out of 5
      </div>
      <div className={styles.message}>Thank you!</div>
      <div className={styles.comment}>
        We appreciate you taking the time to give a rating. If you ever need
        more support don't hesitate to get in touch!
      </div>
    </div>
  )
}
