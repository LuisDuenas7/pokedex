import { useEffect, useState } from "react"
import getInfoByUrl from "../services/getInfoByUrl"
import PokeType from "./pokeType"
import { Link } from "react-router-dom"

const PokeItem=({url})=>{

   const[pokeObj,setPokeObj]=useState({}) 
   const[pokeImg,setPokeImg]=useState('')
   const[TypeArray,setTypeArray]=useState([])
   const[hp,setHp]=useState(0)
   const[attack,setAttack]=useState(0)
   const[defense,setDefense]=useState(0)
   const[speed,setSpeed]=useState(0)

   const[pokeid,setPokeId]=useState(null)

 
    useEffect(()=>{
       getInfoByUrl(url)
         .then((res)=>{
             
             setPokeObj(res.data)
             setPokeImg(res.data.sprites.front_default)
             setTypeArray(res.data.types)
             setHp(res.data.stats[0].base_stat)
             setAttack(res.data.stats[1].base_stat)
             setDefense(res.data.stats[2].base_stat)
             setSpeed(res.data.stats[5].base_stat)
             setPokeId(res.data.id)
         })


    },[url])


    return(
     
     <Link to={`/pokedex/${pokeid}`} >

        <div className="card-pokemon">
            <img src={pokeImg} alt="Loading..."/>
            <h1>{pokeObj.name}</h1>
            {TypeArray.map((item)=> <PokeType key={item.slot} type={item.type}/> )}
            <h2>HP: {hp} </h2>
            <h2>Atack: {attack} </h2>
            <h2>Defense: {defense} </h2>
            <h2>Speed: {speed} </h2>
            
            <br></br><br></br>
        </div>
    </Link>   
    )
}
export default PokeItem