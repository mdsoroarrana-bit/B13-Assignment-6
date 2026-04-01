import React, { use } from 'react';

const Card = ({playersPromise}) => {
    // console.log (playersPromise);
    const players = use(playersPromise);
    // console.log(players);
    return (
        <header className="container mx-auto">
            <div className="text-center items-center w-160   mx-auto space-x-10 space-y-6 mt-20">
                <h2 className="font-bold text-4xl">Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                   <div className="space-x-6">
                     <button className="btn btn-primary rounded-4xl">Products</button>
                    <button className="btn rounded-4xl">Cart ()</button>
                   </div>
            </div> 
             
        <div className="p-10 grid sm:grid-cols-1  md:grid-cols-3 gap-4 items-center">
            {players.map(player => {
                // console.log(player, 'player')
                return <div>
           
                <div className="card  bg-base-100 shadow-sm rounded-4xl ">
                    <h2 className=" font-bold text-xl p-4"> ID : {player.id}</h2>
                    <div className="p-2 ">
                        <h6 className="w-30 rounded-4xl bg-amber-100  text-center">{player.tag}</h6>
                    </div>
                <div className="card-body">
                        <img className="w-6" src={player.icon} alt="" />
                     
                    <div className="space-y-4">
                    <h2 className="text-3xl font-bold">{player.name}</h2>
                    <p>{player.description}</p>
                    <span className="text-xl">${player.price} / {player.period} </span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{player.features} </span>
                    </li>
                    
                    </ul>
                    <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                    </div>
                </div>
                </div>
             
            </div> ;
             })}
        </div>

            

        </header>
    );
};

export default Card;