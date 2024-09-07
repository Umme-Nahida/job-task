import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../ProductProvider/ProductProvider";
import Container from "../../Shared/Container/Container";
import CategoryProduct from "../../Shared/CategoryProduct/CategoryProduct";

const Product = () => {
  const [selectedCategory,setSelectedCategory]=useState('Rocking chair')
  const { product} = useContext(productContext);


  return (
  <Container>
  <div className="flex py-20">
    {/* category */}
    <div className="w-64 min-h-screen border-b-2 border-r-2">
      <ul className="menu space-y-3">
        <li><button
         onClick={()=>setSelectedCategory('Rocking chair')}
         className={`cursor-pointer p-2 ${selectedCategory === 'Rocking chair' ? 'bg-black text-white' : ''}`}
         >Rocking chair</button> </li>
        <li><button
         onClick={()=>setSelectedCategory('Side chair')}
         className={`cursor-pointer p-2 ${selectedCategory === 'Side chair' ? 'bg-black text-white' : ''}`}
         >Side chair</button></li>
        <li><button
         onClick={()=>setSelectedCategory('Lounge Chair')}
         className={`cursor-pointer p-2 ${selectedCategory === 'Lounge Chair' ? 'bg-black text-white' : ''}`}
         >Lounge Chair</button></li>
      </ul>
    </div>

    {/* category product */}
    <div className="flex-1">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 p-5 md:p-10">
      {product?.map((item,index)=>(
        <CategoryProduct key={index} productItem={item} selectedCategory={selectedCategory}></CategoryProduct>
      ))}
      </div>
    </div>
  </div>
</Container>

  );
};

export default Product;
