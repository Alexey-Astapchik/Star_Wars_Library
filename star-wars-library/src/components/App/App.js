import React from 'react';

import Header from '../Header/Header'
import SwapiServiceAPI from '../../services/SwapiServiceAPI';

const App = () => {
    
    const swapi = new SwapiServiceAPI();

    swapi.getPerson(1)
    .then((body) => {
        console.log(body);
    })  

    return (
        <div>
            <Header />
        </div>
    )
}

export default App;