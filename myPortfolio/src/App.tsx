import './App.css'
import BioComponent from './components/bio.tsx'
import NavbarComponent from './components/navbar.tsx'

function App() {

  return (
    <>
      <div className='bg-stone-800'>
      <NavbarComponent />
      <BioComponent />
      </div>
    </>
  )
}

export default App
