import React from 'react';

import List from '../List/List'
import Hero_Infos from '../Hero_Infos/Hero_Infos'
import '../People_page/People_page.css'
import SwapiServiceAPI from '../../services/SwapiServiceAPI'
import Row from '../Row/Row'

export default class Planet_page extends React.Component {

    swapi = new SwapiServiceAPI();

    state = {
        selectedPlanet: null,
        error: false
    }

    componentDidMount() {
        this.setState({error:true})
    }

    selectPlanet = (id) => {
        this.setState({
            selectedPlanet: id
        })
    };

    

    render () {
        const list = <List 
                onItemClick={this.selectPlanet}
                renderItem = {(item) => `${item.name} ${item.diameter} `}/>

        const hero_infos = <Hero_Infos personID={this.state.selectedPlanet}/>
                                        
        return (
            <div className="hero_information">
                 <Row left={list} right={hero_infos}/>
            </div>
        )
    }
}