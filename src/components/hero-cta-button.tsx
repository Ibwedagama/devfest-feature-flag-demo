'use client'

import { useEffect, useState } from 'react'

import { Button } from './ui/button'

export default function HeroCTAButton() {
  const [shouldError, setShouldError] = useState(false)

  useEffect(() => {
    if (shouldError) {
      // Trigger the route-level error boundary for maintenance mode demo.
      throw new Error('Maintenance mode active: Start Reading blocked')
    }
  }, [shouldError])

  return (
    <Button
      size="lg"
      className="font-bold"
      onClick={() => setShouldError(true)}
      aria-describedby="maintenance-note"
    >
      Start Reading
    </Button>
  )
}
