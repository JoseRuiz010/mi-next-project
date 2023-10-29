'use client'
import React, { useState } from 'react'

const productos = () => {
  const [count, setcount] = useState(0)
  return (
    <section>
      productos {count}

      <button onClick={() => setcount(prev => prev + 1)}>+ 1</button>
    </section>
  )
}

export default productos