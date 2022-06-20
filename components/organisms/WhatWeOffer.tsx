import React from 'react'

const WhatWeOffer: React.FC<{}> = () => {
  return (
    <div className="mt-8 md:mt-0">
      <h3 className="mb-4 text-xl px-2 font-serif">What we offer</h3>

      <ul>
        <li className="mb-3">
          <strong className="text-green-700">✓ </strong>
          <span className="px-4">Full text scientific publications</span>
        </li>
        <li className="mb-3">
          <strong className="text-green-700">✓ </strong>
          <span className="px-4">250+ Commercial magazines</span>
        </li>
        <li className="mb-3">
          <strong className="text-green-700">✓ </strong>
          <span className="px-4">No downloading restrictions</span>
        </li>
        <li className="mb-3">
          <strong className="text-green-700">✓ </strong>
          <span className="px-4">All major disciplines</span>
        </li>
        <li className="mb-3">
          <strong className="text-green-700">✓ </strong>
          <span className="px-4">Manage and export citations</span>
        </li>
        <li>
          <strong className="text-green-700">✓ </strong>
          <span className="px-4">Access to wide rage of subjects</span>
        </li>
      </ul>
    </div>
  )
}

export default WhatWeOffer
