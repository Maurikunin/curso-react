import { useState, useEffect } from "react"


const PruebasHooks = ({contador , setContador}) => {

    let arr = [
        "https://sinfiltro.ar/wp-content/uploads/2022/07/f608x342-1222020_1251743_0.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yAvXX4S23XEXS3hL2kcFqf9FK16jrRqlXawRqjKAiy4R9w9HjpTOGi5LsvBzAWtMFxo&usqp=CAU",
        "https://www.lavoz.com.ar/resizer/K_RQpJwG58xbVNG6RzJnvfmZXdg=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/DCORJO5VI5AT7LWKBG2SBYIZT4.jpg",

    ]

    const [img , setImg] = useState("")
    useEffect(()=>{
        setImg(arr[contador])
    
    }, [contador])
    
    console.log("me ejectute cuando se renderiza el componente");
    
  return (
    <>
    <h4>{contador}</h4>
    <button onClick={()=> setContador (contador + 1)}>Aumentar</button>
    <button onClick={()=> setContador (contador - 1)}>Disminuir</button>
    {/* <button onClick={()=> setImg("https://www.lavoz.com.ar/resizer/K_RQpJwG58xbVNG6RzJnvfmZXdg=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/DCORJO5VI5AT7LWKBG2SBYIZT4.jpg")}>Traer imagen</button> */}
    
    <img src={img} alt=""/>
    </>
  )
}

export default PruebasHooks