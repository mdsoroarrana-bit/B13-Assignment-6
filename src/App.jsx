import './App.css'
import Hero from './all-project-name/Hero'
import Navber from './all-project-name/Navber'
import Card from './all-project-name/Card'
import { Suspense } from 'react'

const fetchPlayer = async()=> {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
   const playersPromise = fetchPlayer()
  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
              <Card playersPromise ={playersPromise}></Card>
      </Suspense>
      
    </>
  )
}

export default App
