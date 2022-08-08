import React, { useContext, useEffect, useState } from 'react'
import { EditRemove } from './delete/EditRemove';
import { Picture } from './Picture';
import { Remove } from '../item/delete/Remove';
import { DeleteContext } from '../../context/delete/DeleteContext';


interface Props {
    id: number;
    name: string;
    packInfo?: string[];
    packDetails?: string[];
    editRemove: boolean;
    remove: boolean;    
    price: string;
    showItem: boolean;
}

export const GenericItem: React.FC<Props> = ({ id, name, packInfo, packDetails, editRemove, remove, price,showItem }) => {

  const {deleteFlag} = useContext(DeleteContext)

   
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState('')

  const handleChangeQuantity = (e: { target: { value: string; }; }) => {
    e.target.value && +e.target.value >=0 && setQuantity(e.target.value);
  };

  useEffect(() => {
    setTotal(+price * +quantity)  
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity, showItem])
  

    return (
      <>
        {console.log(deleteFlag.deleteFlag)}
        
        {
          !showItem &&
          
          <div className='genericItem'>
              <Picture />
            <div className='genericData'>
              <div className='genericInfo'>
        <h2>{name} </h2>
        <h3> Quantity: 
          <input className='ml-5'
                    type="number"
                    placeholder='0'
          value={quantity}
          onChange={handleChangeQuantity}
          />
        </h3>
        <ul>
                {packInfo?.map((x, index) => <li key={index}>{x}  <span className='natural-gray'> ({packDetails && packDetails[index]})</span></li>)}
           
        </ul>        

                {editRemove ? <EditRemove /> : <Remove />}
              </div>

              <div className='priceResults'>              
                <h2> ${price}  </h2>
                <h2>Total: ${total.toFixed(2)}</h2>
              </div>
            <div className='separator grayBackground'></div>
          </div>
          </div>
          
        }



      </>
  )
}
