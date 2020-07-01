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
                renderItem = {(item) => `${item.name} - ${item.model}`}/>

        const ships_info = <Starships_info personID={this.state.selectedShip}/>
                                        
        return (
            <div className='row_info'>
                 <Row left={ships_list} right={ships_info}/>
            </div>
        )
    }
}