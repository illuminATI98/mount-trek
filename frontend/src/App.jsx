import './App.scss'
import { Navbar } from './components';
import { Home } from './container';

function App() {
  
  return (
    <div className='app'>
      <Navbar />

      <section className='app__container'>
        <Home />
      </section>

    </div>
  )
}

export default App
