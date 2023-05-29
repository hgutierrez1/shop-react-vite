import { createContext,useState,useEffect } from "react";

export const Ecommerce=createContext();

export function EcommerceProvider({children}){
    /* products in shopping cart counter */
    const [productsInCart,setProductsInCart]=useState(0);
    /* open or close categories in mobile */
    const [isCategoriesOpen,setIsCategoriesOpen]=useState(false)
    const toggleCategories=()=>{
        setIsCategoriesOpen(!isCategoriesOpen)
        console.log('working')
    }
    return(
        <Ecommerce.Provider
            value={{
                productsInCart,
                setProductsInCart,
                isCategoriesOpen,
                setIsCategoriesOpen,
                toggleCategories,
            }}
        >

            {children}
        </Ecommerce.Provider>
    )
}