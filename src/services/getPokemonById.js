import axios from "axios"

const getPokemonById= async(id)=>{
 const URL=`https://pokeapi.co/api/v2/pokemon/${id}`
const  request= await axios.get(URL)
return request
}

export default getPokemonById