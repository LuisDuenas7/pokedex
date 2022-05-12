import { useEffect, useState } from "react"
import { useParams,useNavigate, Link} from "react-router-dom"
import PokeAbilities from "../components/pokeAbilities"
import PokeIndividualType from "../components/pokeIndividualType"
import PokeMoves from "../components/pokeMoves"
import getPokemonById from "../services/getPokemonById"



const Pokemon=()=>{

    const {id} =useParams()
    const navigate=useNavigate()
// ==========================UseStates for properties========================================================================
const[pokeName,setPokeName]=useState('')
const[pokeImg,setPokeImg]=useState('')
const[pokeHeight,setPokeHeight]=useState('')
const[pokeWeight,setPokeWeight]=useState('')     
const[pokeId,setPokeId]=useState('')
const[pokeTypeArr,setPokeTypeArr]=useState([])
const[pokeAbilities,setPokeAbilities]=useState([])
const[pokeHp,setPokeHp]=useState('')
const[pokeSpeed,setPokeSpeed]=useState('')
const[pokeAttack,setPokeAttack]=useState('')
const[pokeDefense,setPokeDefense]=useState('')
const[pokeSpecialAttack,setPokeSpecialAttack]=useState('')
const[pokeSpecialDefense,setPokeSpecialDefense]=useState('')
const[pokeMovesArr,setPokeMovesArr]=useState([])


// ===========================useEffect to return the service that shows individual pokemon information ======================
    useEffect(()=>{
        getPokemonById(id)
          .then((res)=>{
              
              setPokeName(res.data.name)
              setPokeImg(res.data.sprites.other['official-artwork'].front_default)
              setPokeHeight(res.data.height)
              setPokeWeight(res.data.weight)
              setPokeId(res.data.id)
              setPokeTypeArr(res.data.types)
              setPokeAbilities(res.data.abilities)
              setPokeHp(res.data.stats[0].base_stat)
              setPokeAttack(res.data.stats[1].base_stat)
              setPokeDefense(res.data.stats[2].base_stat)
              setPokeSpecialAttack(res.data.stats[3].base_stat)
              setPokeSpecialDefense(res.data.stats[4].base_stat)
              setPokeSpeed(res.data.stats[5].base_stat)
              setPokeMovesArr(res.data.moves)  
          })


    },[id])


  
// =========================================Return of the information page of the individual pokemon==========================
    return(

<div className="card_pokeBox">
            <button className="button-bottom" onClick={()=> navigate(-1) }> ⬅</button>
    <div>  
          <img src={pokeImg} alt={pokeName}/>   
          <h2>{pokeName}</h2>
          <h3>#{pokeId}</h3>
          <h3>{pokeHeight} Height</h3>
          <h3>{pokeWeight} Weight</h3>
          <Link to={`/pokedex/${pokeId}/encounters`}> Encounters 🌐</Link>
    </div>
    
    <div>
          <h2>Type </h2>
         {pokeTypeArr.map((item)=> <PokeIndividualType key={item.slot} type={item.type}/>)}
    </div>
    <div>
      <h2>Abilityes </h2>
       {pokeAbilities.map((item)=> <PokeAbilities key={item.slot} ability={item.ability} />)}
    </div>

    <div className="">
        <h3> HP {pokeHp}</h3>        
        <h3> Attack {pokeAttack}</h3>        
        <h3> Special Attack {pokeSpecialAttack}</h3>        
        <h3> Defense {pokeDefense}</h3>        
        <h3> Special Defense {pokeSpecialDefense}</h3>        
        <h3> Speed {pokeSpeed}</h3>        
    
    </div>   

    <div>
       <h2>Moves</h2> 
      {pokeMovesArr.map((item)=> <PokeMoves key={item.move.url} move={item.move}/>)}
    </div>


</div>
    )
}
export default Pokemon