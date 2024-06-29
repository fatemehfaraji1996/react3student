 import { Link } from "react-router-dom"
 import Nav from "./nav"
 function Links() {
    return(
        <>
        <Nav/>
        <div>
            <Link to="/other"> <button>Back</button> </Link>
        </div>

        <div className="cantanerPage2">
         <img className="selectedCountrye" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
         <div className="cantanerLeft">
         <h2 className="h2Style">iran{}</h2>
         <div className="cantanerPLeftRight">

        <div className="cantanerP">
           <p>Native Name:{}</p>
           <p>Population:{} </p>
           <p>Region:{}</p>
           <p>Sub Region:{}</p>
           <p>Capital:{}</p>
        </div>
        <div className="cantanereftp">
          <p>Top Level Domain:{}</p>
          <p>Currencies:{} </p>
          <p>Languaes:{}</p>
        </div>
        </div>

         </div>
        </div>
        </>
    )
}
export default Links