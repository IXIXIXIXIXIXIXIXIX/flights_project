import React from 'react';

const LetterTile = ({letter, value}) => {
        return (
            <div className="letter-tile">
                <div classname="main-letter">
                    {letter}
                </div>
                <div className="letter-value">
                    {value}
                </div>
            </div>
        )
};

export default LetterTile;