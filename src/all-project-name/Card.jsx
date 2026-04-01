import React, { useState } from 'react';

const Card = ({player,setCoin,coin,setSelectedPlayers, selectedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false);
    const handle = () => {
        
        let newCoin = coin - player.price;
        if(newCoin >=0){
            setCoin(coin - player.price);
        }else {
            alert("Not enuogh coin to purchase this player");
            return;
        }
        alert(`${player.name} is selected`);
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, player])
    };
    return (
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
                    <button onClick={handle} 
                        disabled={isSelected ? true : false}
                        className="btn btn-primary">
                        {isSelected === true ? "Successfull" : "Buy Now"}
                         </button>
                    </div>
                </div>
                </div>
    );
};

export default Card;