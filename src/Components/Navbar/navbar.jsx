import { NavLink  } from "react-router-dom"
import { useContext } from "react"
import { Ecommerce } from "../Context/context"
import { v4 as uuidv4 } from 'uuid'


const active='underline undeline-offset-4'
function GenerateNavbar(array){
    const context=useContext(Ecommerce)  
  return  array.map((item)=>{
     let item2
        if (item.includes(" ")){
            item2=item.slice(0,item.indexOf(" "))+'-'+item.slice(item.indexOf(" ")+1,item.length)
        } else{
            item2=`/${item}`
        }
   
    return(<li key={uuidv4()}>
        <NavLink  to={item2.toLowerCase()} className={({isActive})=>isActive?active:""} onClick={()=>context.searchByCategory(item)}>
            {item}
        </NavLink>
    </li>)
    }
    )
}  
function Navbar(){
    const categories=['Clothes','Electronics','Furniture','Toys','Others']
    const otherpages=['My Orders','My Account','Sign In']
    const context=useContext(Ecommerce)
    return(
        <>
        <div className="absolute top-0 z-50 flex border-b-2 justify-between items-center bg-white w-full p-4 sm:justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:hidden" onClick={()=>context.setIsCategoriesOpen(!context.isCategoriesOpen)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <div className="flex h-full">
                <button onClick={()=>context.setIsCartOpen(!context.isCartOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                </button>
                <p>0</p>
            </div>
        </div>
        <nav className={`${context.isCategoriesOpen?'hidden':'flex'}  h-auto w-4/5 flex-col gap-6 absolute top-16 z-50 border-r-2 border-b-2 rounded-br-lg bg-white pt-4 pb-6 px-6 max-w-xs sm:flex-row sm:max-w-none sm:top-0 sm:w-11/12 sm:py-4 sm:justify-between sm:px-1 sm:border-0 sm:gap-0  sm:flex`}>


            <ul className="list-none flex flex-col justify-evenly sm:flex-row sm:justify-evenly sm:w-auto sm:gap-2">
                <li className="font-bold">
                    <NavLink  to="/" onClick={()=>context.searchByCategory('')}>
                        LOGO
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/" className={({isActive})=>isActive?active:""} onClick={()=>context.searchByCategory('')}>
                        All
                    </NavLink>
                </li>
                {GenerateNavbar(categories)}
            </ul>
            <ul className="list-none flex flex-col justify-evenly sm:flex-row sm:justify-evenly sm:w-auto sm:gap-2">
                {GenerateNavbar(otherpages)}
            </ul>
        </nav>
        </>
    )
}

export default Navbar