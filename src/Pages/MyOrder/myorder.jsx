import { useContext } from "react"
import { Ecommerce } from "../../Components/Context/context"
import OrderCard from "../../Components/OrderCard/ordercard"
import { v4 as uuidv4 } from 'uuid'

function toMyOrders(){
    alert('Someday,I will add a full clone of the payment procedure,with card identification and all the stuff. For now,just pretend you paid the products and go to your shopping history')
    window.location.assign("/my-orders")
}


function MyOrder(){

    const context=useContext(Ecommerce)

    return(
            <section className="grid place-items-center w-full h-screen">
                <div className="flex bg-white absolute w-screen max-h-[90vh] p-6 max-w-md gap-4 flex-col top-14  rounded-bl-lg">
                    <h2 className="font-bold text-2xl py-4 self-center">Shopping Cart</h2>
                    <div className="w-full h-auto flex flex-col py-2 overflow-y-scroll">
                        {
                          context.cart?.map((ordered,index)=>(
                            <OrderCard
                               key={uuidv4()}
                               index={index}
                               img={ordered.img}
                               price={ordered.price}
                               title={ordered.title}
                            />))  
                        }
                    </div>
                    <div className="flex justify-between">
                      <span className="font-thin text-xl">TOTAL</span>
                      <span className="font-bold text-xl pr-2">${context.totalPrice()}</span>
                    </div>
                    <button  onClick={()=>toMyOrders()} className="w-4/5 bg-black border-2 border-black rounded-lg text-white py-2 mt-6 self-center text-center">
                        Confirm purchase
                    </button>
                </div>
            </section>
    )
}

export default MyOrder