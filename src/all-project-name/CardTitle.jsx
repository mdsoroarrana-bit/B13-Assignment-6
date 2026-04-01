import React, { use, useState } from 'react';
import SelectedCard from './SelectedCard';
import Products from './Products';

const CardTitle = ({playersPromise,setCoin ,coin}) => {
    // console.log (playersPromise);
    const players = use(playersPromise);
    // console.log(players);
    const [selectedType,setSelectedType] = useState("Products");
    // console.log(selectedType,"selectedType");
    const [selectedPlayers,setSelectedPlayers] = useState([]);
    return ( 
        <div>
            <div className="text-center items-center w-160   mx-auto space-x-10 space-y-6 mt-20">
                <h2 className="font-bold text-4xl">Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className="space-x-6">
                     <button 
                     onClick={() => setSelectedType("Products")}
                     className= {`btn ${selectedType === "Products" ? "btn-primary" : "" }  rounded-4xl`}>Products</button>
                    <button 
                    onClick={() => setSelectedType("Cart")}
                    className={`btn ${selectedType === "Cart" ? "btn-primary" : "" }  rounded-4xl`}>Cart ({selectedPlayers.length})</button>
                   </div>
                   
            </div> 
            {selectedType === "Products" ?
             (<SelectedCard
                players={players}
                setCoin={setCoin}
                coin ={coin} 
                setSelectedPlayers={setSelectedPlayers}
                selectedPlayers={selectedPlayers}
                />): (
             <Products
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              ></Products>)}
        </div>
        
    );
};

export default CardTitle;