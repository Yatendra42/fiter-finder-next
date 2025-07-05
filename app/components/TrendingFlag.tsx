import React from 'react'

function TrendingFlag() {
  return (
   <>
      <span className='trending-flag'>
        <span className='trending-icon'>
          <svg width="12" height="12" fill="none">
  <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M8 3.5h3m0 0v3m0-3L6.75 7.75l-2.5-2.5L1 8.5"/>
</svg>
        </span>
        <span className='trending-title'>Trending</span>
      </span>
   </>
  )
}

export default TrendingFlag