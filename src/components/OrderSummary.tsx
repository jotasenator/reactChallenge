import React from 'react'


export const OrderSummary: React.FC = () => {
        
  return (
      <>
      <div className='ml-24'>
      <h1> Order Summary</h1>
      <span>Number of items</span>
        <div className='btns-summary'>
          <div className='sumatoria'>
            <h3>Total: </h3>
            <h2 className='sumaTotalPrecios'>$ Sumatoria $</h2>
          </div>
        <button className='btn-summary-checkout dark-softBackground white'>Proceed to Checkout</button>
        <button className='btn-summary-shopping noneBackground'>Continue shopping</button>
      </div>
      </div>
      </>
  )
}
