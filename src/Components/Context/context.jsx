import { createContext,useState,useEffect } from "react";

export const Ecommerce=createContext();

export function EcommerceProvider({children}){
    /* products in shopping cart counter */
    const [productsInCart,setProductsInCart]=useState(0);
    /* open or close categories in mobile */
    const [isCategoriesOpen,setIsCategoriesOpen]=useState(true)
    
    const toggleCategories=()=>{
        setIsCategoriesOpen(!isCategoriesOpen)
    }

    /* get products of API */
    
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
      },[])

    /* filter by title */
        const [searchTerm,setSearchTerm]=useState('')
    /* filter by category */
        const [category,setCategory]=useState('')

        function searchByCategory(valcategory){
            setCategory(valcategory)
        }

     /* choose products to show */
        const var1=products.filter(product=>(product.category.name.includes(category)))

        const productsToShow=(var1.filter((product)=>(product.title.toLowerCase().includes(searchTerm.toLowerCase()))))
        
     
      

           





    return(
        <Ecommerce.Provider
            value={{
                productsInCart,
                setProductsInCart,
                isCategoriesOpen,
                setIsCategoriesOpen,
                toggleCategories,
                products,
                setProducts,
                productsToShow,
                setSearchTerm,
                category,
                setCategory,
                searchByCategory
            }}
        >

            {children}
        </Ecommerce.Provider>
    )
}