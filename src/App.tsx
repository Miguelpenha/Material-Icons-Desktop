import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Home from './pages/Home'
import GlobalStyle from './styles/global'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App