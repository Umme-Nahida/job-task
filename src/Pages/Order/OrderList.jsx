import React, { useContext, useState } from "react";
import { productContext } from "../../ProductProvider/ProductProvider";
import toast from "react-hot-toast";

const OrderList = () => {
    const {cart,deleteFromCart} = useContext(productContext)
    const [count,setCount]=useState(0)

    if(count < 0){
        toast("product never less then zero")
        setCount(0)
    }

  return (
    <div>
        <h1 className="text-4xl mb-8">An overview of your order</h1>
      <div className="overflow-x-auto bg-slate-300">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <div className="flex items-center gap-x-3 border w-max p-2">
                     <button onClick={()=>setCount(count - 1)}>-</button>
                    <span>{count}</span>
                    <button onClick={()=>setCount(count + 1)}>+</button>
                </div>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={cart.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{cart.title} </div>
                  </div>
                </div>
              </td>
              
              <td> {cart.price} </td>
              <th>
                <button onClick={()=>deleteFromCart(cart.id)} className="btn btn-ghost btn-xs">delete</button>
              </th>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
