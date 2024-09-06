import React, { useState } from "react";
import img from "../../assets/image/signup.png";
import img2 from "../../assets/image/icon.png";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Social from "../../Shared/Social/Social";


const Signup = () => {
  const [isShow,setShow] = useState(true)
  return (
    <div className="flex items-center">
      {/* sign up form  */}
      <div className="md:w-1/2">
        <div className="mx-auto w-full text-center max-w-md space-y-1 rounded-lg border bg-white p-4 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900">
          <div className=" space-y-2 mb-3">
            <h5>Welcome To</h5>
            <h1 className="text-4xl font-bold text-black">
              Furni<span className="text-[#1E99F5]">Flex</span>
            </h1>
            <p>Signup for purchase your desire products</p>
          </div>

          {/* form */}
          <form action="#" className="space-y-6">
            <div className="flex items-center gap-x-5">
              <div className="space-y-2 text-sm w-1/2">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                  id="username"
                  placeholder="first name"
                  name="firstName"
                  type="text"
                  required
                />
              </div>
              <div className="space-y-2 text-sm w-1/2">
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                  id="username"
                  placeholder="Last Name"
                  name="lastname"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="email"
                placeholder="Enter email"
                name="email"
                type="email"
                required
              />
              
            </div>
            <div className="space-y-2 text-sm relative">
              <input
                className=" flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                id="password"
                placeholder="Enter password"
                name="password"
                type={isShow ? "text" : "password"}
                required
              />
              <p onClick={()=>setShow(!isShow)} className="absolute right-2 top-1 cursor-pointer">{isShow ? <IoEyeSharp /> : <FaEyeSlash />} </p>
              <div className="flex justify-end text-xs">
                <a
                  href="#"
                  className="text-zinc-700 hover:underline dark:text-zinc-300"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="space-y-2 text-sm flex items-center gap-x-2">
              <input
                className="flex h-5 w-5 rounded-md  px-3 text-sm "
                type="checkbox"
                required
              />
              <p>I agree to the Terms & Policy</p>
              
            </div>
            <button className="btn btn-block rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">
              Signup 
            </button>
          </form>
           
           {/* social login */}
          <Social></Social>

          <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
            already have an account?
            <a href="/login" className="font-semibold underline text-blue-500">
              SignIn
            </a>
          </p>
        </div>
      </div>

      {/* sign up bg-image */}
      <div className="w-1/2 h-screen pl-10 ">
        <div
          className=" h-full bg-cover flex items-center justify-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="text-center space-y-3 px-5 md:px-10 ">
            <img src={img2} className=" mx-auto" alt="" />
            <h1 className="text-4xl font-bold text-white">
              Furni<span className="text-[#1E99F5]">Flex</span>
            </h1>
            <p className="text-slate-300">
              Discover a seamless shopping experience with our curated
              collection of products. From fashion to electronics, we bring
              quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
