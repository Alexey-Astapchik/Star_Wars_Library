import React from 'react';

import Header from '../Header/Header'
import SwapiServiceAPI from '../../services/SwapiServiceAPI';
import Planet from '../Planet/Planet';
import List from '../List/List';

import '../App/App.css'
import Hero_Infos from '../Hero_Infos/Hero_Infos';

export default class App extends React.Component  {

    state = {
        isRandomPlanet: true,
        selectedHero: null
    }

    onTogglePlanet = () => {
        this.setState((prevState) => {
            return {isRandomPlanet: !prevState.isRandomPlanet,}
        });
    };

    selectPerson = (id) => {
        this.setState({
            selectedHero: id
        })
    };

    render() {
        return (
            <div className="App">
                <Header />
                {this.state.isRandomPlanet && <Planet />}
                <a className="toggle"
                    onClick={this.onTogglePlanet}>
                        on/off
                </a>
                <div className="hero_information">
                 <List onItemClick={this.selectPerson}/>
                 <Hero_Infos personID={this.state.selectedHero}/>
             </div>
            </div>
        )
    }
}

