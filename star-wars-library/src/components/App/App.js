import React from 'react';

import Header from '../Header/Header'
import SwapiServiceAPI from '../../services/SwapiServiceAPI';
import Planet from '../Planet/Planet';
import withData from '../helpers/withData'
import '../App/App.css'
import People_page from '../People_page/People_page';
import Planet_page from '../Planet_page/Planet_page'
import SwapiContext from '../SwapiContext/SwapiContext'
import {BrowserRouter as Router, Route} from 'react-router-dom'
export default class App extends React.Component  {

    swapi = new SwapiServiceAPI();

    state = {
        isRandomPlanet: true,
        selectedHero: null,
        selectedPlanet: null,
        lang: 'de',
    }

    onTogglePlanet = () => {
        this.setState((prevState) => {
            return {isRandomPlanet: !prevState.isRandomPlanet,}
        });
    };


    render() {
        return (
                <Router>
                    <div className="App">
                        <Header />
                        {this.state.isRandomPlanet && <Planet />}

                            <Route path='/people' render= { () => <People_page getData={this.swapi.getPeople}
                                    renderItem = {(item) => `${item.name} ${item.gender} ${item.mass}`}/>}/>

                            <Route path='/planets' render= { () => <Planet_page getData={this.swapi.getAllPlanet}
                                    renderItem = {(item) => `${item.name} ${item.diameter}`}/>}/>
                    </div>
                </Router>
        )
    }
}

