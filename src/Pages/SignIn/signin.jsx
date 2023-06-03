import { Link,redirect,useNavigate } from "react-router-dom"
import { useContext } from "react"
import { Ecommerce } from "../../Components/Context/context"



function SignIn(){
  const context=useContext(Ecommerce)
  const navigate=useNavigate()

  function checkUser(e){
    e.preventDefault()
    const userFormData=new FormData(e.target)
    const user={}
    userFormData.forEach((value, key) => (user[key] = value));
    const test=context.users.filter((us)=>{
      return(
      us.name===user.name && us.password===user.password)
    })
  
    
    if (test.length<1){
      alert("Usuario o clave incorrectos")
      navigate('/sign-in')
      /* location.href='/sign-in'  */
    } else{
      debugger
      localStorage.setItem('logged','true')
      context.addLoggedId(test[0].id)
      navigate('/')
      navigate(0)
      /* location.href='/'  */
    }
  }
  const renderView=()=>{
    if(context.logged===false){
        return(
          <div className="grid place-content-center w-screen h-screen gap-6">
            <h2 className="text-center font-bold text-2xl"> Sign In</h2>
            <form onSubmit={(e)=>checkUser(e)}>
                  <p className="flex flex-col">
                    <label className="text-lg font-medium" htmlFor="size1">User</label>
                    <input className="border-2 p-4 rounded-lg w-80 my-4" type="text" name="user" id="size1" placeholder="User" required/>
                  </p>
                  <p className="flex flex-col">
                    <label className="text-lg font-medium" htmlFor="size2">Password</label>
                    <input className="border-2 p-4 rounded-lg w-80 my-4" type="text" name="password" id="size2" placeholder="Password" required />
                  </p>
                  <div className="flex flex-col">
                    <button type="submit" className="bg-black text-white p-4 rounded-lg">Access</button>
                    <div className="flex items-center pt-5 gap-2">
                        <span className="inline-block">Don't have an account?</span><Link className="hover:underline"to='/sign-up'> Sign Up</Link> 
                    </div>
                  </div>  
            </form>
        </div>
        )
      }else{
        return(
          <div className="font-thin text-md top-2/4 absolute right-2/4">You have already logged in!</div>
        )
      }   
  }
    return(
        <>
          {renderView()}
        </>
    )
}

export default SignIn