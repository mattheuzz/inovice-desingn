import './App.css';
import { ButonTotal } from './components/button/button';
import { TableProducts } from './components/table/table';

function App() {
  return (
    <div className="App">
      <h3>Card's Store</h3>
      <TableProducts />
      <ButonTotal />
    </div>
  );
}

export default App;
