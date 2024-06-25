import { getData } from "../utils/fetchData"
import { useState } from "react"
import { useEffect } from "react"


export default function CartCountries() {
    const [image,setimage]= useState(null)
  
useEffect(()=>{
  getData("https://restcountries.com/v3.1/all").then((data)=>{
       setimage(data)
  })
},[])
    return(
    <>
<div className="cantaners">
  {
    image?.map((x,i)=>{
      return(
        <>
      <div className="cardsf">
      <img src={x.flags.png} key={i} className="card-img-top sizePick" alt="..."/>
      <h5 className="">name: {x.name.common}</h5> 
      <p className="card-text">population:{x.population}</p>
    <p className="card-text">region:{x.region}</p>
    <p className="card-text">capita:{x.capital}</p>

    </div>

        </>
      )
       })
       
      }
      </div>
    </>
    )
}
