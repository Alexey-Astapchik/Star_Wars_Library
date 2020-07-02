import React from 'react';

import Planet_list from '../Planet_page/Planet_list/Planet_list';
import Planet_info from '../Planet_page/Planet_info/Planet_info';
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
        const planets_list = <Planet_list 
                onItemClick={this.selectPlanet}
                renderItem = {(planet) => `${planet.name} ${planet.diameter}`}/>

        const planets_infos = <Planet_info planetID={this.state.selectedPlanet}/>
                                        
        return (
            <div className='row_info'>
                 <Row left={planets_list} right={planets_infos}/>
            </div>
        )
    }
}