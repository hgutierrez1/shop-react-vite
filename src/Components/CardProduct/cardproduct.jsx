import { useContext } from "react"
import { Ecommerce } from "../Context/context"

function CardProduct({
    img,
    price,
    title,
    category,
    index,
}){
    const context=useContext(Ecommerce) 
    return(
        <div className="rounded-lg border-2" onClick={()=>context.openProductDetail(index)}>
            <figure className="w-full relative">
                <img className="rounded-t-lg" src={img} alt={title} />
                <span className="bg-white/50 rounded-lg absolute bottom-0 left-0 p-2 ml-2 mb-2">{category}</span>
                <button className="absolute top-0 right-0 bg-white rounded-full p-2 mt-2 mr-2" onClick={(e)=>context.checkLogin(e,{img,price,title,index})}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </figure>
            <div className="flex justify-between p-4">
                <span className="font-thin">{title}</span>
                <span className="font-bold">${price}</span>
            </div>
        </div>
    )
}
export default CardProduct