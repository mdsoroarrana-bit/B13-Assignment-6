import React from 'react';
import Card from './Card';

const SelectedCard = ({players,setCoin,coin,setSelectedPlayers,selectedPlayers }) => {
    return (
        <div>
            <header className="container mx-auto">
            
             
        <div className="p-10 grid sm:grid-cols-1  md:grid-cols-3 gap-4 items-center">
            {players.map(player => {
                return <div>
           
               <Card 
                player={player} 
                setCoin={setCoin} 
                coin={coin}
                setSelectedPlayers={setSelectedPlayers}
                selectedPlayers={selectedPlayers} ></Card>
             
            </div> ;
             })}
        </div>
             
            

            </header>
           
        </div>
    );
};

export default SelectedCard;