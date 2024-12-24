import { product } from './components/mock/mock.jsx';
import ProductPage from './components/product-page/product-page.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme/defaultTheme.js';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <ProductPage product={product} />
    </ThemeProvider>

  )
}

export default App
