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
     <div className="card">
        {
            image?.map((x,i)=>{
                return (
<>
  <img src={x.flags.png} key={i} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">ll</h5> 
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</>
                )
            })
        }
</div>

    </>
    )
}
