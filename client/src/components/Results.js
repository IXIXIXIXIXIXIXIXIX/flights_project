import React, {useState, useEffect} from 'react';
import FlightDetailsPanel from './FlightDetailPanel';
import AirportPanel from './AirportPanel';
import SkyRabblePlayerPanel from './SkyRabblePlayerPanel';
import Letters from '../assets/Letters';
import LetterTile from './LetterTile';

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

        // Turn p1 words into a 2D array of LetterTile objects
        const p1Words = player1Words.words.toUpperCase().split(".");
        let p1Score = 0;
        const p1WordTiles = [];

        for (let word = 0; word < 3; ++word)
        {
            const currentWord = p1Words[word].split("").map((currentLetter, index) => {

                const letterValue = Letters[currentLetter];
                p1Score += letterValue;
                return (<LetterTile letter={currentLetter} value={letterValue} key={index}/>);
            });
            p1WordTiles.push(<div className="skyrabble-single-word">{currentWord}</div>);
        }

        // Turn p1 words into a 2D array of LetterTile objects
        const p2Words = player2Words.words.toUpperCase().split(".");
        let p2Score = 0;
        const p2WordTiles = [];

        for (let word = 0; word < 3; ++word)
        {
            const currentWord = p2Words[word].split("").map((currentLetter, index) => {

                const letterValue = Letters[currentLetter];
                p2Score += letterValue;
                return (<LetterTile letter={currentLetter} value={letterValue} key={index}/>);
            });
            p2WordTiles.push(<div className="skyrabble-single-word">{currentWord}</div>);
        }
        
        let winner;
        if (p1Score > p2Score)
        {
            winner = `Player 1 wins with a score of ${p1Score}.`;
        }
        else if (p1Score < p2Score)
        {
            winner = `Player 2 wins with a score of ${p2Score}.`;
        }
        else
        {
            winner = `Players are tied at ${p1Score} points.`;
        }


        return(

        <>    
        <div className="skyrabble-logo-container in-from-top">
        <img src="http://localhost:3000/images/skyrabble_main.png" className="skyrabble-game-logo"></img>
        </div>
        <div className="main-results-row">
            <SkyRabblePlayerPanel selectedFlight={player2} isPlayer1={false} />
            <div className="skyrabble-centre-column">
                
                <div className="skyrabble-contest-result">
                    <h4>{winner}</h4>

                    <div className="back-button transparent-box" onClick={handleGameReset}>
                        Reset Game
                    </div>
                </div>
            </div>
            <SkyRabblePlayerPanel selectedFlight={player1} isPlayer1={true} />
        </div>
        <div className="skyrabble-word-bar">
            <div className="skyrabble-players-words">
                {p1WordTiles}
            </div>
            <div className="skyrabble-players-words">
                {p2WordTiles}
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