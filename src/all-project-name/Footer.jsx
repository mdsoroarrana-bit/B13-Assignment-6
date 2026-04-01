import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-400 h-80 m-5 container mx-auto">
                    <div className="text-center pt-20 space-y-4 ">
                        <h3 className="text-4xl font-bold text-white">Ready to Transform Your Workflow?</h3>
                        <p className="text-[#627382]">Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                        <div className="space-x-4">
                            <button className="btn rounded-4xl" >Explore Products</button>
                            <button className="btn bg-blue-400  rounded-4xl" >View Pricing</button>
                        </div>
                        <p className="text-[#627382]">14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
            </footer>
        </div>
    );
};

export default Footer;