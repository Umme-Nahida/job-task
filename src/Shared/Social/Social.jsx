import React, { useContext } from 'react';
import { FaApple } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Authentication/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleGoogle =()=>{
      googleLogin()
      .then(()=>{
        toast.success('user login successfully')
        navigate('/')
      })
    }
    return (
        <div>
            {/* another social login */}
          <div className="divider">or</div>
          <div className="flex items-center gap-x-2 ">
            {/* google */}
            <div onClick={handleGoogle} className="flex items-center border p-2 cursor-pointer ">
                <FcGoogle className="text-4xl"></FcGoogle>
                <p className="text-sm">Sign in with Google</p>
            </div>
            {/* apple */}
            <div className="flex items-center border p-2 cursor-pointer">
                <FaApple className="text-4xl"></FaApple>
                <p className="text-sm">Sign in with Apple</p>
            </div>
          </div>
        </div>
    );
};

export default Social;