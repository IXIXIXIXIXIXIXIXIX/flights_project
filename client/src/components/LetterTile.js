import React, {useState} from 'react';

const LetterTile = (letter) => {

    const [letterObject, setLetterObject] = useState(null);

    fetch(`http://localhost:5000/api/skyrabble/letter/${letter}`)
    .then(res => res.json())
    .then(data => setLetterObject(data));


    if (letterObject)
    {

        return (
            <div className="letter-tile">


            </div>
        )
    }
    else
    {
        return (<div></div>);
    }


};

export default LetterTile;