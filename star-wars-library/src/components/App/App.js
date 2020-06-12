import React from 'react';

import Header from '../Header/Header'
import SwapiServiceAPI from '../../services/SwapiServiceAPI';
import Planet from '../Planet/Planet';
import List from '../List/List';

import '../App/App.css'
import Hero_Infos from '../Hero_Infos/Hero_Infos';
import People_page from '../People_page/People_page';

export default class App extends React.Component  {

    swapi = new SwapiServiceAPI();

    state = {
        isRandomPlanet: true,
        selectedHero: null
    }

    onTogglePlanet = () => {
        this.setState((prevState) => {
            return {isRandomPlanet: !prevState.isRandomPlanet,}
        });
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
                <People_page/>
                {/* <People_page/>
                <People_page/> */}
                <div className="hero_information">
                 <List 
                    getData={this.swapi.getAllPlanet}  
                    onItemClick={this.selectPerson}
                    renderItem = {(item) => `${item.name} ${item.diameter}`}/>

                 <Hero_Infos personID={this.state.selectedHero}/>
            </div>
            </div>
        )
    }
}

