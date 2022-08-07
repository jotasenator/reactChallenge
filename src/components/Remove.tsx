import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export const Remove: React.FC = () => {
    let deleteFlag = false
    
    const handleRemove = () => {
        deleteFlag = true
        
        alert(deleteFlag)
    }
    
  return (
      <>

          <button className='btn-generic' onClick={handleRemove} style={{ display: "flex", justifyContent: "center",alignItems:"center"}} ><span><DeleteOutlineOutlinedIcon/></span> Remove</button>
      </>
  )
}
