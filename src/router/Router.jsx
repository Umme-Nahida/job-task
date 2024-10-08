
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Categories from "../Pages/Categories/Categories";
import Custom from "../Pages/Custom/Custom";
import Blog from "../Pages/Blog/Blog";
import Signup from "../Components/Signup/Signup";
import Login from "../Components/Login/Login";
import Order from "../Pages/Order/Order";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/product',
            element:<Product></Product>
        },
        {
            path:'/order',
            element:<Order></Order>
        },
    
        {
            path:'/custom',
            element:<Custom></Custom>
        },
        {
            path:'/Blog',
            element:<Blog></Blog>
        },
      ]
    },
    {
      path:'/signup',
      element:<Signup></Signup>
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]);

export default router;
  