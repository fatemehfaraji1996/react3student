
function DroupDown() {


    
    return (
        <>
        <div>
            <select onChange={(e)=>{
               console.log(e.target.value);
            }} name="" id="">
             {
                image?.map((capital,id)=>{
                   return(
                    <option key={id} value={capital.id}>
                        {capital.capital}
                    </option>
                   )
                })
             }
            </select>
        </div>
        </>
    )
}
export default DroupDown