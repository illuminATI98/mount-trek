import './App.scss'
import { Navbar, Footer, Header} from './components';
import { Home } from './container';

function App() {
  
  return (
    <div className='app'>
      <Navbar />

        <Home />
      
      <Footer />
    </div>
  )
}

export default App
