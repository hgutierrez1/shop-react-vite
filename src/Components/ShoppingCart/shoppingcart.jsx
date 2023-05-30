import { useContext } from "react"
import OrderCard from "../OrderCard/ordercard"
import { Ecommerce } from "../Context/context"
import { v4 as uuidv4 } from 'uuid'



function Shoppingcart(){
    const renderView=()=>{
        if(context.cart?.length>0){
            return(
                context.cart?.map((ordered)=>(
                    <OrderCard
                       key={uuidv4()}
                       img={ordered.img}
                       price={ordered.price}
                       title={ordered.title}
                    />))  
            )
          }else{
            return(
              <div className="font-thin text-md">You still haven't add anything to your shopping cart!</div>
            )
          }   
      }
    const context=useContext(Ecommerce)
    return(
        <aside className={`${context.isCartOpen?'hidden':'flex'} bg-white absolute w-full max-h-screen p-6 max-w-md gap-4 flex-col top-14 -right-px`}>
            <h2 className="font-bold text-2xl py-4 self-center">Shopping Cart</h2>
            <div className="w-full h-auto flex flex-col py-2">
                {
                  renderView()
                }
            </div>
            <button className="w-4/5 bg-black border-2 border-black rounded-lg text-white py-2 mt-6 self-center justify-end">
                Checkout
            </button>
        </aside>
       
    )
}

export default Shoppingcart