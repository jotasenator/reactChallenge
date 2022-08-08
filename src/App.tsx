import './App.css';
import { GenericItem } from './components/item/GenericItem';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { YouMightAlsoLike } from './components/youMightAlsoLike/YouMightAlsoLike';
import { OrderSummary } from './components/orderSummary/OrderSummary';
import { useReducer } from 'react';
import { DeleteContext } from './context/delete/DeleteContext';
import { deleteReducer } from './context/delete/deleteReducer';


function App() {

  const [deleteFlag, dispatch] = useReducer(deleteReducer, {deleteFlag:false})
    
  return (
    <div className="App">
      <DeleteContext.Provider value={{
        deleteFlag,
        dispatch,
      }}>
      <div>
        <Navbar />
      </div>

      <div className='genericContainer-orderSummaryContainer'>
          <div className='genericContainer'>
              <GenericItem id={1} name={'My Christmas pack'} packDetails={['container', 'Green, Small', 'Blue']} packInfo={['Cardboard box', 'Unisex Short Sleeve T-Shirt', 'Basic bottle']} editRemove={true} remove={false} price={71.20.toFixed(2)} showItem={deleteFlag.deleteFlag}  />
            
            <GenericItem id={2} name={'Basic T-Shirt'} editRemove={false} remove={true} price={13.50.toFixed(2)} showItem={deleteFlag.deleteFlag} />
            
            <GenericItem id={3} name={'Woman bottle'} editRemove={false} remove={true} price={36.50.toFixed(2)} showItem={deleteFlag.deleteFlag} />        
           </div>
        <div className='orderSummaryContainer'>
              <OrderSummary/>
            </div>
      </div>
      <div>

        <h2 className='youMightAlsoTitle'>You Might Also Like</h2>
      </div>
      <div className='youMightAlsoLike'>
        <YouMightAlsoLike />        
        <YouMightAlsoLike />        
        <YouMightAlsoLike />        
        <YouMightAlsoLike />        
      </div>

      <div className='footer'>
        <Footer />
        </div>
      </DeleteContext.Provider>
      
    </div>
  );
}

export default App;
