import { Link} from "react-router-dom"
import { Ecommerce } from "../Context/context"
import { useContext } from "react"




function LoginCheck(){
    const context=useContext(Ecommerce)
    return(
        <section className={`${context.logged?'hidden':''} bg-white w-auto h-auto p-6`}>
            <h3 className="font-bold pb-4">To complete this action,you must sign in</h3>
            <div className="flex justify-between p-2">
                <Link  onClick={()=>context.setSignIn(false)} to='/' className="border-2 rounded-xl p-2 bg-black text-white">Return to Main Page</Link>
                <Link onClick={()=>context.setSignIn(false)} to='/sign-in' className="border-2 rounded-xl p-2 bg-black text-white">Sign in</Link>
            </div>
        </section>
    )
}

export default LoginCheck