import React from 'react';

const Products = ({selectedPlayers,setSelectedPlayers}) => {
    console.log(selectedPlayers,"selectedPlayers");
    const removeHandle = (player)=> {
        // console.log(setSelectedPlayers);
        const filterdPlayers = selectedPlayers.filter(
            (selectedPlayers) => selectedPlayers.name != player.name);
            // console.log(filterdPlayers);
            setSelectedPlayers(filterdPlayers);

             
             
            

    };       
    return (
        <div className="p-6 ">{
            selectedPlayers.map((player, ind) =>{
                    return (
                        <div key={ind} className="flex items-center m-4 justify-between p-4 rounded-2xl border" >
                            <div className="flex gap-4 " >
                                <img className="w-6 h-6 border items-center" src={player.icon} alt="" />
                                <div>
                                    <h3>{player.name}</h3>
                                    <p>${player.price}</p>
                                </div>
                            </div>
                        <button onClick={()=>removeHandle(player)} 
                        className="btn text-red-500">
                            Remove</button>
                        
                    </div>
                    
                    );
                })}
                <div className="flex justify-between border mt-40 ">
                            <p>Total :</p>
                            <p> $ {}</p>
                </div>
        </div>
    );
};

export default Products;