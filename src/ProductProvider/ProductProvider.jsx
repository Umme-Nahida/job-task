import React, { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const productContext = createContext()

const ProductProvider = ({children}) => {
    const [product,setProduct]=useState([])
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('/product.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProduct(data)
        })
    },[])

    // add to cart functionality
    const addToCart =(product)=>{
        // console.log("addtocart", product)
        toast.success("Add to Cart Successfully")
        console.log(cart)
       setCart((preCart)=> [...preCart,product])
    }

    // delete item functionality
    const deleteFromCart =(productId)=>{
        setCart((preCart)=> preCart.filter(item=>item.id !== productId))
    }
    const productInfo= {
        product,setProduct,
        cart,setCart,
        addToCart,
        deleteFromCart
    }


    return (
       <productContext.Provider value={productInfo}>
         {children}
       </productContext.Provider>
    );
};

export default ProductProvider;