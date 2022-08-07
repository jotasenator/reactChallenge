import './App.css';
import { GenericItem } from './components/GenericItem';

function App() {
  return (
    <div className="App">

      <GenericItem name={'My Christmas pack'} packDetails={['container', 'Green, Small', 'Blue']} packInfo={['Cardboard box', 'Unisex Short Sleeve T-Shirt', 'Basic bottle']} editRemove={true} remove={false} price={71.20.toFixed(2)} />
      
      <GenericItem name={'Basic T-Shirt'} editRemove={false} remove={true} price={13.50.toFixed(2)} />
      
      <GenericItem name={'Woman bottle'} editRemove={false} remove={true} price={36.50.toFixed(2)} />
      
    </div>
  );
}

export default App;
