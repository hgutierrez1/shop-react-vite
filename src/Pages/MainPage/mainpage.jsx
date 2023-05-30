import { useContext } from "react"
import { Ecommerce } from "../../Components/Context/context"
import CardProduct from "../../Components/CardProduct/cardproduct"

function MainPage(){
    const context=useContext(Ecommerce)
    const renderView=()=>{
        if(context.productsToShow?.length>0){
            return(
                context.productsToShow?.map((product)=>(
                    <CardProduct
                         key={product.id}
                         img={product.images[0]}
                         price={product.price}
                         title={product.title}
                         category={product.category.name}
                     />
                 ))
            )
          }else{
            return(
              <div className="font-thin text-md">We couldn't find anything. Try with a different word or searching for another category!</div>
            )
          }   
      }

    return(
            <main className="absolute top-20 flex flex-col items-center w-full h-full">
                <div>
                    <h1 className="font-bold text-3xl">PLACEHOLDER</h1>
                    <p>Search something!</p>
                    <input className="border-2 rounded-lg p-2 mt-2 mb-6" type="text" placeholder="Introduce one or more key terms"
                    onChange={(e)=>context.setSearchTerm(e.target.value)}/>
                </div>
                <div className="grid gap-4 justify-items-center lg:grid-cols-3 xl:grid-cols-4 w-4/5 min-[500px]:grid-cols-2">
                    {renderView()}
                </div>
            </main>
    )
}

export default MainPage