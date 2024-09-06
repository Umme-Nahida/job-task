
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Categories from "../Pages/Categories/Categories";
import Custom from "../Pages/Custom/Custom";
import Blog from "../Pages/Blog/Blog";

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
            path:'/custom',
            element:<Custom></Custom>
        },
        {
            path:'/Blog',
            element:<Blog></Blog>
        },
      ]
    },
  ]);

export default router;
  