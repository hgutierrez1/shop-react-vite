import { useContext } from "react"
import { Ecommerce } from "../Context/context"


function BlockPage({children}){
    const context=useContext(Ecommerce)
    return(
        <aside className={`${context.signIn?'':'hidden'} bg-black/60 backdrop-blur-sm w-full h-screen absolute z-50 grid place-content-center`}>
            {children}
        </aside>
    )
}
 export default BlockPage