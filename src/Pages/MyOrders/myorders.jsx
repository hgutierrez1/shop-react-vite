import { useContext } from "react"
import { Ecommerce } from "../../Components/Context/context"
import OrdersEntry from "../../Components/OrdersEntry/ordersentry"
import { v4 as uuidv4 } from 'uuid'


function MyOrders(){
    const context=useContext(Ecommerce)
    const renderView=()=>{
        if(context.logged===true){
            return(
                context.getResumeForMyOrders()?.map((resume)=>(
                    <OrdersEntry
                    key={uuidv4()}
                    price={resume.price}
                    date={resume.date}
                    numproducts={resume.numproducts}
                    regencard={resume.regencard}
                    />
                ))
            )
          }else{
            return(
              <div className="font-thin text-md">You need to sign in to see your shopping history</div>
            )
          }   
      }
    return(
        <>
        <main className="grid place-items-center w-screen h-screen">
            <div className="flex flex-col h-screen absolute w-2/5 gap-6 top-28">
                <h2 className="font-bold text-2xl text-center">My Orders</h2>
                
                    {
                        renderView()
                    }
                
            </div>
        </main>
        </>
    )
}

export default MyOrders