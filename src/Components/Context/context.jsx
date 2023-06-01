import { createContext,useState,useEffect } from "react";

export const Ecommerce=createContext();

export function EcommerceProvider({children}){
    /* products in shopping cart counter */
    const [productsInCart,setProductsInCart]=useState(0);
    /* open or close categories in mobile */
    const [isCategoriesOpen,setIsCategoriesOpen]=useState(true)
    /* add to cart functionality */
    const [cart,setCart]=useState([])
        /* singin blockade functionality */
    const [signIn,setSignIn]=useState(false)
    /* add new user functionality */
    const [users,setUsers]=useState(()=>{
        return JSON.parse(localStorage.getItem('users')) || []
    })
    

    function addNewUser(newuser){
        users.push(newuser)
        localStorage.setItem('users',JSON.stringify(users))
    }
    const[checker,setChecker]=useState(false)
    const[pmatch,setPmatch]=useState(true)

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
        function checkLogin(e,props){
            e.stopPropagation()
            if (logged){
                addToCart(props)
            } else{
                setSignIn(true)
                console.log('block working')
            }
        }

        function addToCart(props){
            setCart([...cart,props])
        }
    /* product detail functionality and open/close product detail*/   
        const [productDetailed,setProductDetailed]=useState(null)


        const [isProductDetailOpen,setIsProductDetailOpen]=useState(false)
        function openProductDetail(index){
            setProductDetailed(productsToShow[index])
            setIsProductDetailOpen(false)

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
                openProductDetail,
                productDetailed,
                isProductDetailOpen,
                setIsProductDetailOpen,
                signIn,
                setSignIn,
                logged,
                setlogged,
                addNewUser,
                users,
                checker,
                setChecker,
                pmatch,
                setPmatch
            }}
        >

            {children}
        </Ecommerce.Provider>
    )
}