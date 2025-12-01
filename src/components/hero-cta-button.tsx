'use client'

import { useState } from 'react'

import { Button } from './ui/button'

export default function HeroCTAButton() {
  const [shouldError, setShouldError] = useState(false)

  if (shouldError) {
    throw new Error('Internal server error')
  }

  return (
    <Button size="lg" className="font-bold" onClick={() => setShouldError(true)}>
      Start Reading
    </Button>
  )
}
