

//const reducer = (state,action) => newState   metodo reducex

const reducer =(state,action)=> {

    



    const {type}=action
    if(type==="@counter/increment"){
   return state +1
    }
     
    if(type==="@counter/decrement"){
        return state -1
         }

         if(type==="@counter/reset"){
            return 0
             }
  
 
    return state
}

const counterIncrement={
    type:"@counter/increment"
}

const counterdecrement={
    type:"@counter/decrement"
}

const counterreset={
    type:"@counter/reset"
}

console.log(reducer(4, counterIncrement))
console.log(reducer(5, counterdecrement))
console.log(reducer(50, counterreset))

/*
@counter/increment
@counter/decrement
@counter/reset

@user/login
@user/logout

@theme/setDark
@theme/setLight

//Compatible react,vue,angular,svelte
*/

// ===============================================================================================================================

