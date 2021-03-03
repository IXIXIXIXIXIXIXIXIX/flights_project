import React from 'react';

const LetterTile = ({letter, value}) => {
        return (
            <div className="letter-tile">
                <div classname="main-letter">
                    <div id="letters">{letter}</div>
                </div>
                <div className="letter-bottom-row">
                <div className="letter-value">
                    <div id="number">{value}</div>
                </div>
                </div>
            </div>
        )
};

export default LetterTile;