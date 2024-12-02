import './App.css'
import { product } from './components/mock.jsx';
import ProductPage from './components/product-page.jsx';

function App() {

  return (
      <ProductPage product={product}/>
  )
}

export default App
