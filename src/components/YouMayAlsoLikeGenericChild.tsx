import React from 'react'

interface Props{
  subtitle: string;
  lowPrice: string;
  highPrice: string;
  minimum: string
}

export const YouMightAlsoLikeChild: React.FC<Props> = ({subtitle, lowPrice, highPrice, minimum}) => {
        
  return (
    <>
      <div>
      <div className='youMightChild grayBackground'></div>
        <div >
          <br />
          {subtitle}
          <br />
          <br />
        <div>
            <span>${lowPrice}-${highPrice}</span>
            
            <span className='ml-94'>Minimum: {minimum}</span>
        </div>
        </div>
      </div>
          
      </>
  )
}
