import './App.css'
import Hero from './all-project-name/Hero'
import Navber from './all-project-name/Navber'
import Card from './all-project-name/CardTitle'
import { Suspense, useState } from 'react'
import Products from './all-project-name/Products'
import Main from './all-project-name/Main'
import Footer from './all-project-name/Footer'

const fetchPlayer = async()=> {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
   const playersPromise = fetchPlayer()
   const [coin,setCoin] = useState(7000);
  return (
    <>
      <Navber coin={coin}></Navber>
      <Hero></Hero>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Card playersPromise ={playersPromise}
       setCoin ={setCoin}
       coin={coin} ></Card>
      </Suspense>
      <Main></Main>
      <Footer></Footer>
      
    </>
  )
}

export default App
