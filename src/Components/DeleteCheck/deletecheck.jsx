import { Link, Navigate, useNavigate } from "react-router-dom"
import { Ecommerce } from "../Context/context"
import { useContext } from "react"


function DeleteCheck(){
    const navigate = useNavigate()
    const context=useContext(Ecommerce)
    function Cancel(){
        context.setSignIn(false)

    }
    function DeleteMyAccount(){
        const usertodelete=localStorage.getItem('id');
        context.users.findIndex(target=>target.id===usertodelete)
        context.users.splice(usertodelete,1)
        localStorage.setItem('users',JSON.stringify(context.users))
        localStorage.removeItem('id')
        localStorage.removeItem('logged')
        alert('Your account has been deleted')
        navigate('/')
        navigate(0)
        /* location.href='/' */
        context.setSignIn(false)
    }
    return(
        <section className={`${context.logged?'':'hidden'} bg-white w-auto h-auto p-6`}>
            <p>All your shop history will be lost. This action is irreversible.</p>
            <h3 className="font-bold pb-4 text-center"> Do you wish to proceed?</h3>
            <div className="flex justify-evenly p-2">
                <Link onClick={()=>Cancel()} className="border-2 rounded-xl p-2 bg-black text-white">Cancel</Link>
                <button onClick={()=>DeleteMyAccount()} className="border-2 rounded-xl p-2 bg-black text-white">Delete my account</button>
            </div>
        </section>
    )
}

export default DeleteCheck