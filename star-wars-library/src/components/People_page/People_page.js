import React from 'react';

import List from '../List/List'
import Hero_Infos from '../Hero_Infos/Hero_Infos'
import '../People_page/People_page.css'
import SwapiServiceAPI from '../../services/SwapiServiceAPI'
import Row from '../Row/Row';

export default class People_page extends React.Component {

    swapi = new SwapiServiceAPI()

    state = {
        selectedHero: null,
        error: false
    }

    componentDidMount() {
        this.setState({error:true})
    }

    selectPerson = (id) => {
        this.setState({
            selectedHero: id
        })
    }

    

    render () {
        const list = <List  
                onItemClick={this.selectPerson}
                renderItem = {(item) => `${item.name}: ${item.gender}, ${item.mass}`}/>

        const hero_infos = <Hero_Infos personID={this.state.selectedHero}/>
                                        
        return (
            <div className='row'>
                 <Row left={list} right={hero_infos}/>
            </div>
        )
    }
}