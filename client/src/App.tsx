import { BrowserRouter } from 'react-router-dom'
import AppRoute from './routes/AppRoute'
import ScrollToTop from './helpers/ScrollToTop'
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoute />
    </BrowserRouter>
  )
}

export default App
