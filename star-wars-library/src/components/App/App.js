import React from 'react';

import Header from '../Header/Header'
import SwapiServiceAPI from '../../services/SwapiServiceAPI';
import Planet from '../Planet/Planet';
import List from '../List/List'

import '../App/App.css'
import Hero_Infos from '../Hero_Infos/Hero_Infos';

const App = () => {
    
    const swapi = new SwapiServiceAPI();

    swapi.getPerson(1)
    .then((body) => {
        console.log(body);
    })  

    return (
        <div className="app">
            <Header />
            <Planet/>
            <List/>
            <Hero_Infos/>
        </div>
    )
}

export default App;