import React from 'react'


export const Remove: React.FC = () => {
    let deleteFlag = false
    
    const handleRemove = () => {
        deleteFlag = true
        
        alert(deleteFlag)
    }
    
  return (
      <>

          <button onClick={handleRemove}>Remove</button>
      </>
  )
}
