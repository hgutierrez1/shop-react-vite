import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Ecommerce } from "../Context/context"




function OrdersEntry(props){
    const context=useContext(Ecommerce)
    return(
        <NavLink  onClick={()=>context.setCart(props.regencard)} to='/my-order' className="flex justify-between w-full items-center border-2 rounded-xl py-2 px-4">
            <p className="w-full h-auto font-light max-[440px]:text-sm">{props.date}</p>
            <div className="flex flex-col w-2/5">
                <p className="font-bold">${props.price}</p>
                <div className="flex flex-col">
                    <p>{props.numproducts}</p> 
                    <p className="max-[440px]:hidden">products</p>
                </div>

            </div>
        </NavLink>
    )
}
export default OrdersEntry