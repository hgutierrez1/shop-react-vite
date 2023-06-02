import { createContext,useState,useEffect } from "react";

export const Ecommerce=createContext();

export function EcommerceProvider({children}){
    /* products in shopping cart counter */
    const [productsInCart,setProductsInCart]=useState(0);
    /* open or close categories in mobile */
    const [isCategoriesOpen,setIsCategoriesOpen]=useState(true)
    /* add to cart functionality */
    const [cart,setCart]=useState([])
    /* add shopping history */
    const [shophistory,setShophistory]=useState(()=>{
        return JSON.parse(localStorage.getItem('shophistory')) || []
    })

    const id=localStorage.getItem('id')

    function addtoShopHistory(cartlist){
        console.log(id)
        const user=users.find(us=>us.id==id)
        user.orders.push(cartlist)
        localStorage.setItem('users',JSON.stringify(users))
    }
    /* get resume for history entry */
        function getResumeForMyOrders(){
            const user=users.find(us=>us.id===id)
            
            if (user){
                const ordersresume= user.orders.map((userorder)=>{
                    const tprice=userorder.reduce((a,b)=>a+b.price,0)
                    const date=new Date()
                    const regencard=userorder
                    const datevalue=date.getFullYear()+'.'+date.getMonth()+'.'+date.getDate()
                    return({
                        price:tprice,
                        date:datevalue,
                        numproducts:userorder.length,
                        regencard:regencard
                    })
               })
               return ordersresume
            }

        }
    /* total prices from cart */
    function totalPrice(){
        const total=cart.reduce((a,b)=>a+b.price,0)
        return total
    }
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
        const [logged,setLogged]=useState(()=>{
            return JSON.parse(localStorage.getItem('logged')) || false
        })
        function addLoggedId(id){
            localStorage.setItem('id',id)
        }
        ///////////////
        function checkLogin(e,props){
            e.stopPropagation()
            if (logged===true){
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
                setLogged,
                addNewUser,
                users,
                checker,
                setChecker,
                pmatch,
                setPmatch,
                totalPrice,
                shophistory,
                addLoggedId,
                addtoShopHistory,
                getResumeForMyOrders,
                id
            }}
        >

            {children}
        </Ecommerce.Provider>
    )
}