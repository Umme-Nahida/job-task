import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/Logo.png";
import Container from "../Container/Container";
import { FaCartPlus } from "react-icons/fa6";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { productContext } from "../../ProductProvider/ProductProvider";


const Navbar = () => {
  const {cart}=useContext(productContext)
  const {user,logOut}=useContext(AuthContext)
  const [isActive,setActive]=useState(false)

  const handleLogOut=()=>{
    logOut()
    toast.success('user logOut successfully')
  }

  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product">Product</Link>
      </li>
      <li>
        <Link to="/order">Order</Link>
      </li>
      <li>
        <Link to="/custom">Custom</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );
  return (
    <div className="w-full fixed z-[999] mx-auto">
      <Container>
        <div className="navbar  bg-white shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {menu}
              </ul>
            </div>
            <img src={logo} width="150" height="30" alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menu}</ul>
          </div>

          {/* img and cart */}
          <div className="navbar-end">
            <div className="indicator mr-5">
              <span className="indicator-item badge badge-secondary">{cart?.length}+ </span>
              <button className="text-4xl"><FaCartPlus /></button>
            </div>

            <div onClick={()=>setActive(!isActive)} className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              {
                isActive && <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
               {
                user ? <>
                  <li>
                  <a href="/login" className="justify-between">
                    Login
                  </a>
                </li>
                <li>
                  <button onClick={handleLogOut}>LogOut </button>
                </li>
               
                </>
                : 
                <>
                   <li>
                  <a href="/login" className="justify-between">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/signup">Sign Up</a>
                </li>
                </>
               }
              </ul>
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
