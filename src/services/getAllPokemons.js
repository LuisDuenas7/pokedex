import axios from "axios";

const getAllPokemons=async (position,numberOfPokemons)=>{
const URL= `https://pokeapi.co/api/v2/pokemon?offset=${position}&limit=${numberOfPokemons}`  
const required= await axios.get(URL)
return required

} 

export default getAllPokemons