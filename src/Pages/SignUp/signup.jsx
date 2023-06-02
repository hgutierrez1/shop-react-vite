import { NavLink } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { Ecommerce } from "../../Components/Context/context"



function SignUp(){
  const submit=document.querySelector('#submit')

  const context=useContext(Ecommerce)

  function SentNewUser(e){
    e.preventDefault()
    const newuserFormData=new FormData(e.target)
    const newuser={}
    newuserFormData.forEach((value, key) => (newuser[key] = value));
    newuser.orders=[]
    newuser.id=uuidv4()
    context.addNewUser(newuser)
    location.href='/sign-in'
  }

  function pchecker(){
    let pw=document.querySelector('#size2').value
    let rpw=document.querySelector('#size3').value
    const submit=document.querySelector('#submit')
    debugger
    if(pw===rpw){
      submit.disabled=false
      context.setPmatch(true)
    }else{
      submit.disabled=true
      context.setPmatch(false)
    } 
  }

  function checkUserName(){
    const user=document.querySelector('#size1').value
    
  const repeated=context.users.find(us=>us.user===user)
    
      if (repeated){
        context.setChecker(true)
      } else {
        context.setChecker(false)
      }
    
  }
    return(
        <>
        <div className="grid place-content-center w-screen h-screen gap-6">
            <h2 className="text-center font-bold text-2xl"> Sign Up</h2>
            <form onSubmit={(e)=>SentNewUser(e)}>
                  <p className="flex flex-col">
                    <label className="text-lg font-medium" htmlFor="size1">User</label><span id='alert' className={`${context.checker==true?'':'hidden'} text-red-600 font-bold`}>User name already used</span>
                    <input onChange={()=>checkUserName()} className="border-2 p-4 rounded-lg w-80 my-4" type="text" name="user" id="size1" placeholder="User" required/>
                  </p>
                  <p className="flex flex-col">
                    <label className="text-lg font-medium" htmlFor="size2">Password</label>
                    <span id='alert2' className={`${context.pmatch===false?'':'hidden'} text-red-600 font-bold`}>Passwords doesn't match</span>
                    <input  onChange={pchecker} className="border-2 p-4 rounded-lg w-80 my-4" type="text" name="password" id="size2" placeholder="Password" required />
                  </p>
                  <p className="flex flex-col">
                    <label className="text-lg font-medium" htmlFor="size3">Repeat password</label>
                    <input  onChange={pchecker} className="border-2 p-4 rounded-lg w-80 my-4" type="text" name="password" id="size3" placeholder="Repeat password" required />
                  </p>
                  <div className="flex flex-col">
                    <button id='submit' disabled type="submit" className="bg-black text-white p-4 rounded-lg">Create Account</button>
                    <div className="flex items-center pt-5 gap-2">
                        <span className="inline-block">Alredy have an account?</span><NavLink className="hover:underline"to='/sign-in'> Sign In</NavLink> 
                    </div>
                  </div>

                  
            </form>
        </div>
        </>
    )
}

export default SignUp