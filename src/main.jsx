import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import {theme} from "./components/theme/defaultTheme"
import App from './components/app/app'


createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
)
