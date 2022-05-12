import { useEffect, useState } from "react"
import getAllPokemons from "../services/getAllPokemons"
import PokeItem from "../components/pokeItem"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import SearchBox from "../components/searchBox"
import getPokemonByType from "../services/getPokemonByType"
import {RiLogoutCircleLine } from "react-icons/ri";

const PokemonList=()=>{
// =============Handler global State=====================================================================================================================
const userName= useSelector(state => state.userName)
const dispatch= useDispatch()
const navigate=useNavigate()


const handlerOnClick=()=>{
   dispatch({
       type: "@user/logout",
       payload:userName
   })
navigate('/')
}

// ============useStates=======================Handler of information=====================================================================================
const[pokeList,setPokeList]=useState([])   
const[pokeListByTYpe,setPokeListByType]=useState([])   
const[OffsetPosition,setOffsetPosition]=useState(0)
const[numberOfPokemons]=useState(12)
const[type,setType]=useState("")


// ==================UseEffects if exist 'type' render by type else render all pokemons==================================================================

    useEffect(()=>{
       if(type){
           getPokemonByType(type)
             .then((res)=>{
                
                 setPokeListByType(res.data.pokemon)
               
             })
       }
       else
       {
          getAllPokemons(OffsetPosition,numberOfPokemons)
            .then((res)=>{
                
                setPokeList(res.data.results)

            })

       }

    },[type,OffsetPosition,numberOfPokemons])




//======================== Code for pagination pokemons by type(useState,slice,arrow function)==================================================
const[start,setStart]=useState(0);
const[end,setEnd]=useState(12);

const nextPage=()=>{
    if(start <= pokeListByTYpe.length)
setStart(start +12)
setEnd(end +12)
}

const prevPage=()=>{
if(start > 0){
    setStart( start-12)
    setEnd(end -12)
}}


const arrPokeTypePages= pokeListByTYpe.slice(start,end)



// ======================= Return render image with help of a ternary condition=================================================================

const list = type ? arrPokeTypePages.map((item) => <PokeItem key={item.pokemon.url} url={item.pokemon.url} />) : pokeList.map((item) => <PokeItem key={item.url} url={item.url} />)



// ===========================Return of render of the main page ================================================================================


return(
 <div className="main-box">
       <div className="header-user">
            <h2>Welcome to your Pokedex!!!</h2>
            <h1> Hi,{userName}!!... Gotta catch 'em all!</h1>
           <button className="button-logout" onClick={()=> handlerOnClick()}> <RiLogoutCircleLine className="icon-logout"/></button>
       </div>
       <div className="box-search">  
           <SearchBox filter={setType} />
       </div> 
      <div className="box-pokemons">
            {list}
        
       </div>
       
       
 <div className="next-prev-buttons">
      {type? 
           <div className="bottom-buttons">
              <div>      
                 <button className="button-bottom" onClick={prevPage}> Previus </button>
               </div> 
               <div><h4>Luis Dueñas 2022®</h4></div>
               <div> 
                  <button className="button-bottom" onClick={nextPage}>Next </button>
                </div> 
           </div>
           :
       <div className="bottom-buttons"> 
            <div>
               <button className="button-bottom" onClick={()=>{if(OffsetPosition > 0){ setOffsetPosition(OffsetPosition - 10)}}}>Previus </button>
             </div> 
             <div><h4>Luis Dueñas 2022®</h4></div>
            <div>     
               <button className="button-bottom" onClick={()=> setOffsetPosition(OffsetPosition +10)}>Next </button>
            </div>  
       </div>

      }


  </div>
</div>
    )

}

export default PokemonList



