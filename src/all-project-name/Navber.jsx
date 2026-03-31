import React from 'react';

const Navber = () => {
    return (
        <div>
            <div className="container mx-auto  navbar bg-base-100 shadow-sm justify-between">
            <div className="flex ">
                <a className="text-2xl font-bold text-[#4F39F6]">DigTools</a>
            </div>
            <div >
                <div className="flex items-center text-center gap-4">
                    <p>Products</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Testimonials</p>
                    <p>FAQ</p>
                </div>
                
                
            </div>
            <div className="flex space-x-4">
                <div className="dropdown dropdown-end flex items-center text-center gap-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                    <span className="badge-sm indicator-item gap-1">0</span>
                   
                    </div>
                </div>
                <div>
                    <p>Login</p>
                </div>
                
                </div>

                <div className="dropdown dropdown-end">
                 <div>
                    <button className="btn btn-primary">Get Started</button>
                 </div>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default Navber;