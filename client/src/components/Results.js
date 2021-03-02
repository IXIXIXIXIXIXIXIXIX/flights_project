import React, {useState, useEffect} from 'react';
import FlightDetailsPanel from './FlightDetailPanel';
import AirportPanel from './AirportPanel';
import SkyRabblePlayerPanel from './SkyRabblePlayerPanel';

const Results = ({selectedFlight, originAirport, destinationAirport, handleBackClick, 
    handlePlayer1Choice, handlePlayer2Choice, player1, player2, player1Words, player2Words}) => {

    const [gameInProgress, setGameInProgress] = useState(false)

    const handlePlayClick = () => {
        setGameInProgress(true);
    };

    const handleGameReset = () => {
        setGameInProgress(false)
        handlePlayer1Choice(null)
        handlePlayer2Choice(null)
    };

    if (gameInProgress)
    {
        console.log("P1 words:", player1Words);
        console.log("P2 words", player2Words);


        const p1Words = player1Words.words.toUpperCase().split(".");
        console.log("Just words:", p1Words);

        return(

        <>    
        <div className="skyrabble-logo-container in-from-top">
        <img src="http://localhost:3000/images/skyrabble_main.png" className="skyrabble-game-logo"></img>
        </div>
        <div className="main-results-row">
            <SkyRabblePlayerPanel selectedFlight={player2} isPlayer1={false} />
            <div className="skyrabble-centre-column">
                <div className="skyrabble-contest-result">

                </div>
            </div>
            <SkyRabblePlayerPanel selectedFlight={player1} isPlayer1={true} />
        </div>
        <div className="skyrabble-word-bar">
            <div className="skyrabble-players-words">

            </div>
            <div className="skyrabble-players-words">
                
            </div>
        </div>
        </>
        )
    }
    else
    {
        let gameLink = [];
        if (player1Words && player2Words)
        {
            gameLink.push(
                <div className="back-button in-from-top" onClick={handlePlayClick}>
                <h3>PLAY SKYRABBLE!</h3>
                </div>
            );
        }

        return (
            <>
            <div className="results-controls">
            <div className="back-button in-from-top" onClick={handleBackClick}>
                <h3>Back to Results List</h3>
            </div>
            {gameLink}
            </div>
            <div className="main-results-row">
                <AirportPanel airport={destinationAirport} airportLabel="Destination Airport" animationDirection="in-from-right"/>
                <FlightDetailsPanel selectedFlight={selectedFlight} 
                    handlePlayer1Choice={(flight)=>{handlePlayer1Choice(flight)}}
                    handlePlayer2Choice={(flight)=>{handlePlayer2Choice(flight)}} player1={player1} player2={player2}/>
                <AirportPanel airport={originAirport} airportLabel="Origin Airport" animationDirection="in-from-left"/>
            </div>
            </>
        );
    }
};

export default Results;