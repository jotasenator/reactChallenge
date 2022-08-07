import React, { useEffect, useState } from 'react'
import { EditRemove } from './EditRemove';
import { Remove } from './Remove';

interface Props {
    name: string;
    packInfo?: string[];
    packDetails?: string[];
    editRemove: boolean;
    remove: boolean;    
    price: string;
}

export const GenericItem: React.FC<Props> = ({ name, packInfo, packDetails, editRemove, remove, price }) => {
  
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState('')

  const handleChangeQuantity = (e: { target: { value: string; }; }) => {
    e.target.value && +e.target.value >=0 && setQuantity(e.target.value);
  };

  useEffect(() => {
    setTotal(+price * +quantity)  
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity])
  

    return (
      <>
        
        {
          
        <div>
        <h2>{name} </h2>
        <h3> Quantity:
          <input
          type="number"
          placeholder="How many items do you want?"
          value={quantity}
          onChange={handleChangeQuantity}
          />
        </h3>
        <ul>
          {packInfo?.map((x, index )=> <li key={index}>{x}  {packDetails &&packDetails[index]}</li>)}
           
        </ul>
        <h2> ${price}  </h2>
        <h2>Total: ${total.toFixed(2)}</h2>

          {editRemove ? <EditRemove /> : <Remove />}
        </div>
        }



      </>
  )
}
