import { useContext } from "react"
import { Ecommerce } from "../Context/context"

function ProductDetailsCard(){
    const context=useContext(Ecommerce)
    return(
        <aside className={`${context.isProductDetailOpen?'hidden':'flex'} bg-white absolute max-w-lg right-0 h-screen flex-col top-14 rounded-bl-lg pb-6`}>
            <figure>
                <img src={context.productDetailed.images[0]} alt={context.productDetailed.title}/>

            </figure>
            <button className="absolute top-0 right-0 bg-white rounded-full w-12 h-12 mt-2 mr-2" onClick={()=>context.setIsProductDetailOpen(!context.isProductDetailOpen)}>
                <p className="text-2xl font-bold">X</p>
            </button>
            <div className="flex justify-between px-6 py-6 text-2xl">
                <span >{context.productDetailed.title}</span>
                <span className="font-bold" >${context.productDetailed.price}</span>
            </div>
            <span className="px-6 font-thin pt-8">{context.productDetailed.description}</span>
        </aside>
    )
}

export default ProductDetailsCard