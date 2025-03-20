'use client'

import { useSearchParams } from 'next/navigation'

export default function Submitted() {
  const searchParams = useSearchParams()
  console.log('value: ', searchParams.get('data'))
  return
}
