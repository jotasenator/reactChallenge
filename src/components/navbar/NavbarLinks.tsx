import React from 'react'

interface Props{
  content: string;
}


export const NavbarLinks: React.FC<Props> = ({content}) => {
        
  return (
      <>
      <a href={`/${content}`}>{content} </a>
          
      </>
  )
}
