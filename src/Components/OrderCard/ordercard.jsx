import { useContext } from "react"
import { Ecommerce } from "../Context/context"

function OrderCard(props){
    const context=useContext(Ecommerce)
    return(
        <div className="flex w-full py-2 h-20 justify-between">
            <figure>
                <img className="h-full rounded-lg" src={props.img} alt={props.title} />
            </figure>
            <div className="flex">
                <div className="flex flex-col self-center pr-2">
                    <span>{props.title}</span>
                    <span className="text-right">${props.price}</span>
                </div>
                <button onClick={()=>props.deleteProductFromCart(props.index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default OrderCard