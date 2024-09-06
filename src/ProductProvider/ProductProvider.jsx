import React, { createContext, useState } from 'react';

export const productContext = createContext()

const ProductProvider = ({children}) => {
    const [product,setProduct]=useState([])
    const [cart,setCart]=useState([])


    const productInfo= {
        product,setProduct,
        cart,setCart
    }


    return (
       <productContext.Provider value={productInfo}>
         {children}
       </productContext.Provider>
    );
};

export default ProductProvider;