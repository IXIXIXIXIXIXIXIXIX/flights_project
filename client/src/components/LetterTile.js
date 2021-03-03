import React from 'react';

const LetterTile = ({letter, value}) => {
        return (
            <div className="letter-tile">
                <div classname="main-letter">
                    {letter}
                </div>
                <div className="letter-bottom-row">
                <div className="letter-value">
                    {value}
                </div>
                </div>
            </div>
        )
};

export default LetterTile;