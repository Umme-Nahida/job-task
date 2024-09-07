import React, { useContext } from 'react';
import { productContext } from '../../ProductProvider/ProductProvider';

const Product = () => {
    const {product}=useContext(productContext);
    
    return (
        <div>
            
             {/* product category */}
            <div className='min-h-screen bg-yellow-200'>
                <ul className='menu space-y-3'>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Product;