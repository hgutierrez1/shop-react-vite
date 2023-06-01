import { useRoutes,BrowserRouter } from 'react-router-dom'
import { EcommerceProvider } from '../Components/Context/context'
import MainPage from '../Pages/MainPage/mainpage'
import MyOrders from '../Pages/MyOrders/myorders'
import Order from '../Pages/Order/order'
import Navbar from '../Components/Navbar/navbar'
import SignIn from '../Pages/SignIn/signin'
import SignUp from '../Pages/SignUp/signup'
import ShoppingCart from '../Components/ShoppingCart/shoppingcart'
import NotFound from '../Pages/NotFound/notfound'
import BlockPage from '../Components/BlockPage/blockpage'
import LoginCheck from '../Components/LoginCheck/logincheck'
import MyOrder from '../Pages/MyOrder/myorder'
import './App.css'


function Routes(){

  
  const routes= useRoutes([
    {path:'/',element:<MainPage/>},
    {path:'/:category',element:<MainPage/>},
    {path:'/sign-in',element:<SignIn/>},
    {path:'/sign-up',element:<SignUp/>},
    {path:'/order',element:<Order/>},
    {path:'/my-orders',element:<MyOrders/>},
    {path:'/my-order',element:<MyOrder/>},
    {path:'/',element:<MainPage/>},
    {path:'/*',element:<NotFound/>},
  ])

  return routes
}


function App() {
  
  
  return (
    
    <EcommerceProvider>
        <BrowserRouter>
        <Routes/>
        <Navbar/>
        <ShoppingCart/>
          <BlockPage> 
            <LoginCheck/>
          </BlockPage>
      </BrowserRouter>
    </EcommerceProvider>
            

  )
}

export default App
