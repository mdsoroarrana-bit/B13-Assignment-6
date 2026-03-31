import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse pl-30">
                <img
                src="/src/assets/banner.png"
                className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <div className="w-70 bg-indigo-100 rounded-4xl">
                      <div className="flex gap-2 text-[#4F39F6]  h-10  items-center text-center justify-center">
                        <img className="w-5" src="/src/assets/products/Group 5.png" alt="" />
                        <p>New: AI-Powered Tools Available</p>
                      </div>
                    </div>
                    
                <h1 className="text-5xl font-bold mx-auto">Supercharge Your <br /> Digital Workflow</h1>
                <p className="py-6">
                    Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                </p>
                <div className="flex gap-10">
                    <button className="btn btn-primary rounded-4xl ">Explore Products</button>
                    <div className="items-center text-center ">
                    <button className="btn rounded-4xl text-[#4F39F6] "><img src="/src/assets/products/Play.png" alt="" /> Watch Demo</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hero;