import { createContext,useState,useEffect } from "react";

export const Ecommerce=createContext();

export function EcommerceProvider({children}){
    /* products in shopping cart counter */
    const [productsInCart,setProductsInCart]=useState(0);
    /* open or close categories in mobile */
    const [isCategoriesOpen,setIsCategoriesOpen]=useState(true)
    /* add to cart functionality */
    const [cart,setCart]=useState([])
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
        /* open or close cart menu */
        const [isCartOpen,setIsCartOpen]=useState(true)
     /* choose products to show */
        const var1=products.filter(product=>(product.category.name.includes(category)))

        const productsToShow=(var1.filter((product)=>(product.title.toLowerCase().includes(searchTerm.toLowerCase()))))
        /* login functionality */
        const [logged,setlogged]=useState(true)
        function checkLogin(props){
            if (logged){
                addToCart(props)
            } else{
                console.log('logeate')
            }
        }

        function addToCart(props){
            setCart([...cart,props])
            console.log(cart)
        }
        

    return(
        <Ecommerce.Provider
            value={{
                productsInCart,
                setProductsInCart,
                isCategoriesOpen,
                setIsCategoriesOpen,
                products,
                setProducts,
                productsToShow,
                setSearchTerm,
                category,
                setCategory,
                searchByCategory,
                checkLogin,
                cart,
                setCart,
                isCartOpen,
                setIsCartOpen,
            }}
        >

            {children}
        </Ecommerce.Provider>
    )
}