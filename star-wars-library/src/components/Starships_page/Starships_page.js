import React from 'react';

import Starships_info from '../Starships_page/Starships_info/Starships_info';
import Starships_list from '../Starships_page/Starships_list/Starships_list';
import '../Starships_page/Starships_page.css';
import SwapiServiceAPI from '../../services/SwapiServiceAPI';
import Row from '../Row/Row'


export default class Starships_page extends React.Component {

    swapi = new SwapiServiceAPI();

    state = {
        selectedShip: null,
        error: false
    }

    componentDidMount() {
        this.setState({error:true})
    }

    selectShip = (id) => {
        this.setState({
            selectedShip: id
        })
    };

    

    render () {
        const ships_list = <Starships_list
                onItemClick={this.selectShip}
                renderItem = {(ship) => `${ship.name} - ${ship.model}`}/>

        const ships_info = <Starships_info shipID={this.state.selectedShip}/>
                                        
        return (
            <div className='row_info'>
                 <Row left={ships_list} right={ships_info}/>
            </div>
        )
    }
}