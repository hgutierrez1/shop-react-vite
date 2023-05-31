import { useContext } from "react"
import OrderCard from "../OrderCard/ordercard"
import { Ecommerce } from "../Context/context"
import { v4 as uuidv4 } from 'uuid'



function Shoppingcart(){
  const context=useContext(Ecommerce)

  /* delete from cart functionality */
  const deleteProductFromCart=(index)=>{
    const newprods=[...context.cart]
    newprods.splice(index,1)
    context.setCart(newprods)
  }

    const renderView=()=>{
        if(context.cart?.length>0){
            return(
                context.cart?.map((ordered,index)=>(
                    <OrderCard
                       key={uuidv4()}
                       index={index}
                       img={ordered.img}
                       price={ordered.price}
                       title={ordered.title}
                       deleteProductFromCart={deleteProductFromCart}
                    />))  
            )
          }else{
            return(
              <div className="font-thin text-md">You still haven't add anything to your shopping cart!</div>
            )
          }   
      }
    
    return(
        <aside className={`${context.isCartOpen?'hidden':'flex'} bg-white absolute w-full max-h-[90vh] p-6 max-w-md gap-4 flex-col top-14 -right-px rounded-bl-lg`}>
            <h2 className="font-bold text-2xl py-4 self-center">Shopping Cart</h2>
            <div className="w-full h-auto flex flex-col py-2 overflow-y-scroll">
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