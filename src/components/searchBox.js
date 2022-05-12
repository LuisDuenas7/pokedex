import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { SiNintendoswitch } from "react-icons/si";


const SearchBox= ({filter})=>{


//===========================useNavigate=============================================================================== 
    const navigate=useNavigate()
 
//=================================Array of pokemon types to select list of options===================================

const pokeTypes = ['All pokemons', 'normal', 'fighting', 'flying', 'poison', 'ground', 'rock','dark', 'ghost','steel','fire',
    'water', 'grass','electric','psychic', 'ice', 'dragon', 'fairy']


// ================useState for select button(type or name)===========================================================
   
   const[byname,setByName]=useState(true)


 

//============================.map for iterate in array of type for select options====================================== 




 const typeList= pokeTypes.map((item)=> <option key={item} value={item} className='options'>{item}</option>)   


// ===================return of component shows the search and options on pokemonList================================

return(
<div className="search-box">
 { byname? 
 <div className="">
    <label htmlFor="type"> <span className="red"> Type </span> <SiNintendoswitch className="icon-switch"/> <span className="white"> Name </span> </label>
     <button className="button-hide" id="type" type={"checkbox"} onClick={()=> setByName(!byname)}/>
  
  </div>
   :
  <div>
      <label htmlFor="type"> <span className="white"> Type </span>  <SiNintendoswitch className="icon-switch"/> <span className="red"> Name </span> </label>
    <button className="button-hide" id="type" type={"checkbox"} onClick={()=> setByName(!byname)}/> 
     
  </div>
 }
   
   { byname?
     <div className="option-search">
       <select name="types" id="" className="pokeSelect" onChange={(e)=> (e.target.value ==="All pokemons")? filter("") : filter(e.target.value) }>{typeList}</select>  
     </div>   
      :
     <div className="option-search"> 
      <input className="input-search" placeholder="Search pokemon"  onKeyDown={(e) => e.key === 'Enter' ? navigate(`/pokedex/${e.target.value.toLowerCase().trim()}`) : ""} ></input>
    </div>
   }


</div>
)
}
export default SearchBox

