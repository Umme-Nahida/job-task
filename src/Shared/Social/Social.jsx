import React from 'react';
import { FaApple } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const Social = () => {
    return (
        <div>
            {/* another social login */}
          <div className="divider">or</div>
          <div className="flex items-center gap-x-2 ">
            {/* google */}
            <div className="flex items-center border p-2 ">
                <FcGoogle className="text-4xl"></FcGoogle>
                <p className="text-sm">Sign in with Google</p>
            </div>
            {/* apple */}
            <div className="flex items-center border p-2">
                <FaApple className="text-4xl"></FaApple>
                <p className="text-sm">Sign in with Apple</p>
            </div>
          </div>
        </div>
    );
};

export default Social;