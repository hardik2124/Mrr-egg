import { useState } from 'react'
import './App.css'
import useLenisScroll from './animations/useLenis'
import HeroSection from './components/heroSection';
import HomeLayout from './pages/HomeLayout';


function App() {
  const [count, setCount] = useState(0)
  useLenisScroll();

  return (
    <>
     <HomeLayout/>

    </>
  )
}

export default App
