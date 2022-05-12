import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PokeEncounters from "../components/pokeEncounters"
import getPokemonEncounters from "../services/getPokemonEncounters"

const Encounters=()=>{
const navigate= useNavigate()    // Use to navigate between the pages
const {id} =useParams()          // Use to get the id of the pokemon, brings the necessary data for service can work.

// ======================useState to hands information of encounter==============================================
const[encountersArr,setEncountersArr]=useState([])



// ==============useEffect to get encounters trough getPokemonEncounters service===================================
useEffect(()=>{
    getPokemonEncounters(id)
      .then((res)=>{
          
          setEncountersArr(res.data)

      })
  },[id])


    return(
        <div className="box-encounter">
        
        <button className="button-bottom" onClick={()=> navigate(-1)}> ⬅ </button>
             <div>

            {encountersArr.map((item)=> <PokeEncounters key={item.location_area.url} location={item.location_area}/>)}
             
              </div>
       
       
        </div>
    )

}
export default Encounters