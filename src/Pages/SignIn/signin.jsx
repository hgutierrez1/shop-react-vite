import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { Ecommerce } from "../../Components/Context/context"

function test(e){
  e.preventDefault()
  console.log('working usercontext')
}

function SignIn(){
  const context=useContext(Ecommerce)
    return(
        <>
        <div className="grid place-content-center w-screen h-screen gap-6">
            <h2 className="text-center font-bold text-2xl"> Sign In</h2>
            <form>
                  <p className="flex flex-col">
                    <label className="text-lg font-medium" htmlFor="size_1">User</label>
                    <input className="border-2 p-4 rounded-lg w-80 my-4" type="text" name="size" id="size_1" placeholder="User" required/>
                  </p>
                  <p className="flex flex-col">
                    <label className="text-lg font-medium" htmlFor="size_2">Password</label>
                    <input className="border-2 p-4 rounded-lg w-80 my-4" type="text" name="size" id="size_2" placeholder="Password" required />
                  </p>
                  <div className="flex flex-col">
                    <button type="submit" className="bg-black text-white p-4 rounded-lg">Access</button>
                    <div className="flex items-center pt-5 gap-2">
                        <span className="inline-block">Don't have an account?</span><NavLink className="hover:underline"to='/sign-up'> Sign Up</NavLink> 
                    </div>
                  </div>

                  
            </form>
        </div>
        </>
    )
}

export default SignIn