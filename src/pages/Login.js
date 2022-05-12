import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {RiLoginCircleFill } from "react-icons/ri";


const Login=()=>{

const[userName,setUserName]= useState('')
const dispatch= useDispatch()
const navigate=useNavigate()

const handlerOnClick=()=>{
    dispatch({
        type: "@user/login",
        payload:userName
    })
navigate('/pokedex')
}

return(
<div className="login-page">
  <input className="input-login" placeholder="Pokemon trainer name" onKeyDown={(e) => e.key === 'Enter' ? handlerOnClick() : ""} onChange={(e) => setUserName(e.target.value)}/>
  <button className="button-login"  onClick={handlerOnClick}> <RiLoginCircleFill className="icon-login"/> </button>
</div>

)
}

export default Login