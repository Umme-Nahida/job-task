import React from 'react';
import OrderList from './OrderList';
import OrderDetails from './OrderDetails/OrderDetails';
import Container from '../../Shared/Container/Container';

const Order = () => {
    return (
       <Container>
         <div className='flex py-20  gap-x-10'>
            {/* order list */}
            <div className='w-8/12'>
                <OrderList></OrderList>
            </div>
            {/* order details */}
            <div className='w-4/12 '>
                <OrderDetails></OrderDetails>
            </div>
        </div>
       </Container>
    );
};

export default Order;