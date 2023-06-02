import { useContext } from "react"
import { Ecommerce } from "../../Components/Context/context"
import { NavLink } from "react-router-dom"


function MyAccount(){
    const context=useContext(Ecommerce)
    function getdetails(){
        const id=context.id
        const user=context.users.filter((us)=>us.id===id)
        return user
    }
    function LogOut(){
        localStorage.removeItem('id')
        localStorage.removeItem('logged')
        alert('You have succesfully logged out')
        location.href='/'
    }
    function DeleteAccount(){{
        context.setSignIn(true)
    }}
    const renderView=()=>{
        if(context.logged===true){
            const user=getdetails()[0]
            debugger
            return(
                <main className="top-4 absolute flex flex-col justify-evenly w-screen items-center h-screen ">
                    <div className="flex gap-2 text-2xl">
                        <p className="font-thin">Hello!</p>
                        <p className="font-bold">{user.user}</p>
                    </div>
                    <div className="flex gap-2 text-xl">
                        <p className="font-thin">Your User ID:</p>
                        <p className="font-bold" >{user.id} </p>
                    </div>

                    <div className="flex flex-col gap-14 text-xl h-1/4">
                        <p className="font-thin">To see your purchases until now,click here:</p>
                        <NavLink to='/my-orders' className='bg-black text-white text-center p-4 rounded-lg'>To my orders</NavLink>
                    </div>

                    <div className="flex flex-col gap-14 text-xl h-1/4">
                        <p className="font-thin">Do you want to close session? Click Here!</p>
                        <button onClick={()=>LogOut()} className='bg-black text-white text-center p-4 rounded-lg'>Log Out</button>
                    </div>
                    <div className="flex flex-col gap-14 text-xl h-1/4">
                        <p className="font-thin">Delete your account</p>
                        <button onClick={()=>DeleteAccount()} className='bg-black text-white text-center p-4 rounded-lg'>Delete</button>
                    </div>
                   
                    
                    

                </main>
            )
          }else{
            return(
              <div className="font-thin text-md">You need to sign in to see your details account</div>
            )
          }   
      }

    return(
        <div className="top-14 absolute">
            {
                renderView()
            }
        </div>
       
    )
}
export default MyAccount