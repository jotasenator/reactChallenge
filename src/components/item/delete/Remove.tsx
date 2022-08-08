import React, { useContext } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { DeleteContext } from '../../../context/delete/DeleteContext';
import { types } from '../../../types/types';


export const Remove: React.FC = () => {
    const {dispatch} = useContext(DeleteContext)
    
    const handleRemove = () => {
        dispatch({
            type: types.delete,
            payload: {
                deleteFlag: true
            }
        })
    }
    
  return (
      <>

          <button className='btn-generic' onClick={handleRemove} style={{ display: "flex", justifyContent: "center",alignItems:"center"}} ><span><DeleteOutlineOutlinedIcon/></span> Remove</button>
      </>
  )
}

