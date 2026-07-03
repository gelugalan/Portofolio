import React from 'react'

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm">
      {children}
    </div>
  )
}

export default Card
