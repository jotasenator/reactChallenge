import React from 'react'
import { Remove } from './Remove'

export const EditRemove: React.FC = () => {

    const handleEditPack = () => {
        alert('Learn React.js if you want to Edit Pack :)')
    }
    

  return (
      <>
          <div>
          <button onClick={handleEditPack}>Edit pack</button>
              <Remove />
          </div>
          
    </>
  )
}
