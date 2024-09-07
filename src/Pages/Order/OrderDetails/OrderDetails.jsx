import React from 'react';

const OrderDetails = () => {
    return (
        <div className='p-5 space-y-3'>
            <h1 className='text-3xl'>Order Details</h1>

            <div className='bg-slate-300 space-y-2 p-5 rounded-md'>
                <div className='flex justify-between'>
                    <h5 >Subtotal</h5>
                    <h5>€ 1071.00</h5>
                </div>
                <div className='flex justify-between'>
                    <h5 >Shipping</h5>
                    <h5>Free</h5>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <h5 >Estimated Tax</h5>
                    <h5>€ -</h5>
                </div>
              
            </div>
            <button className='btn btn-block bg-black text-white hover:bg-slate-900 '>Go to Checkout</button>
        </div>
    );
};

export default OrderDetails;