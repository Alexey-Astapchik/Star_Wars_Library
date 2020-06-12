import React from 'react';

import List from '../List/List'
import Hero_Infos from '../Hero_Infos/Hero_Infos'
import '../People_page/People_page.css'
import SwapiServiceAPI from '../../services/SwapiServiceAPI'


const Row = ({left, right}) => {
    return (
        <div className="Row">
            <div className="">
                {left}
            </div>
            <div className="">
                {right}
            </div>
        </div>
    )
}

export default class People_page extends React.Component {

    swapi = new SwapiServiceAPI();

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
    };

    

    render () {
        const list = <List 
                getData={this.swapi.getPeople}  
                onItemClick={this.selectPerson}
                renderItem = {(item) => `${item.name} ${item.gender} ${item.mass}`}/>
        const hero_infos = <Hero_Infos personID={this.state.selectedHero}/>
                                        
        return (
            <div className="hero_information">
                 <Row left={list} right={hero_infos}/>
            </div>
        )
    }
}