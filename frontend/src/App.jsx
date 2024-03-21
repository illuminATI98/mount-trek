import './App.scss'
import { Navbar, Footer } from './components';
import { Home } from './container';

function App() {
  
  return (
    <div className='app'>
      <Navbar />

      <section className='app__container'>
        <Home />
      </section>
      <Footer />
    </div>
  )
}

export default App
