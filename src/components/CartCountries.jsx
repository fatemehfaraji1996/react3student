import { getData } from "../utils/fetchData"
import { useState } from "react"
import { useEffect } from "react"
import Nav from "./nav"
import { Link,NavLink } from "react-router-dom"
const g = ["Africa","Europa","Oceania","Americas","Asia"]
export default function CartCountries() {
    const [image,setimage]= useState(null)
useEffect(()=>{
  getData("https://restcountries.com/v3.1/all").then((data)=>{
       setimage(data)
  })
},[])
const [serch,setserch]=useState("")
const [selectedContinent, setSelectedContinent] = useState('All');
const handleContinentChange = (event) => {
  setSelectedContinent(event.target.value);
};
    return(
    <>
    <Nav></Nav>
    <div key={12} className="input">
        <div key={13} className="input-group input-group-lg">
            <input key={14} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="serch for country..." onChange={(e)=>setserch(e.target.value)}/>
        </div>
        </div>
<div key={0} className="cantaners">
  <select key={11} onChange={handleContinentChange} className="dropdown">
        <option key={1} value="All">All</option>
        <option key={2} value="Asia">Asia</option>
        <option key={3} value="Europe">Europe</option>
        <option key={4} value="Africa">Africa</option>
        <option key={5} value="Oceania">Oceania</option>
        <option key={6} value="Americas">Americas</option>
      </select>
  {
    image?.filter((item)=>{
      return serch.toLocaleLowerCase() === ''
      ? item
      :item.name.common.toLocaleLowerCase().includes(serch)
    })
    .filter((x)=>{
    //  return selectedContinent === x.region
    //   ? x 
    //   :null
    return selectedContinent == "All"
    ? true
    :selectedContinent === x.region
    
    })
    .map((x,i)=>{
      return(
        <>
      <Link to="/Country" className="linkStyle">
      <div key={i} className="cardsf">
      <img src={x.flags.png} key={i} className="card-img-top sizePick" alt="..."/>
      <h5 key={i}className="">name: {x.name.common}</h5> 
      <p  key={i} className="card-text">population:{x.population}</p>
    <p  key={i} className="card-text">region:{x.region}</p>
    <p  key={i} className="card-text">capital:{x.capital}</p>
    </div>
    </Link>
        </>
      )
       })
      }
      </div>

    </>
    )
}
