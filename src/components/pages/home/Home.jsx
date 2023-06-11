import { useState } from "react"
import NavBar from "../../common/navBar/NavBar"
import PruebasHooks from "../../common/pruebasHooks/PruebasHooks"


const Home = () => {

  const [contador , setContador] = useState(0)
  
  return (
    <>
    <NavBar />
    <PruebasHooks contador ={contador} setContador= {setContador}/> 
    
    </>

  )
}

export default Home