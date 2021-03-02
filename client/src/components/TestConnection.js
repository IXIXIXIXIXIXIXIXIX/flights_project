import React from 'react'

const TestConnection = () => {

    const icaoCode = "EDDV";

    fetch(`http://localhost:5000/api/airport_data/icao_code/${icaoCode}`)
    .then(res => res.json())
    .then(data => console.log("connection_test", data));

    return (<h1>Testing</h1>);

};

export default TestConnection;