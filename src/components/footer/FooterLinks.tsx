import React from 'react'

interface Props{
  content: string;
}


export const FooterLinks: React.FC<Props> = ({content}) => {
        
  return (
      <>
       <a href="#">{content} </a>
          
      </>
  )
}
