import React from 'react';

import Header from '../Header/Header'
import SwapiServiceAPI from '../../services/SwapiServiceAPI';
import Planet from '../Planet/Planet';
import List from '../List/List';
import withData from '../helpers/withData'
import '../App/App.css'
import Hero_Infos from '../Hero_Infos/Hero_Infos';
import People_page from '../People_page/People_page';
import Planet_page from '../Planet_page/Planet_page'
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
            <div className="App">
                <Header />
                {this.state.isRandomPlanet && <Planet />}
                <div className="hero_information">
                <People_page getData={this.swapi.getPeople}
                    renderItem = {(item) => `${item.name} ${item.gender} ${item.mass}`}/>
                <Planet_page getData={this.swapi.getAllPlanet}
                    renderItem = {(item) => `${item.name} ${item.diameter}`}/>
                 {/* <List 
                    getData={this.swapi.getAllPlanet}  
                    onItemClick={this.selectPerson}
                    renderItem = {(item) => `${item.name} ${item.diameter}`}/>

                 <Hero_Infos personID={this.state.selectedHero}/> */}
            </div>
            </div>
        )
    }
}

