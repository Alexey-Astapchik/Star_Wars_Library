import React from 'react';
import '../List/List.css'
import SwapiServiceAPI from '../../services/SwapiServiceAPI';
import Loader from '../Loader/Loader';

export default class List extends React.Component {

    swapi = new SwapiServiceAPI()

    state = {
        people: null,
    }

    componentDidMount() {
        this.swapi.getPeople().then((people) => {
            this.setState({people})
        });
    }


    renderList(arr) {
        return arr.map((item) => {
            return (
                <li className="hero_item_info" key= {item.id}
                    onClick={() => this.props.onItemClick(item.id)}>
                    <p>
                        {item.name}
                    </p>
                </li>
            )
        })
    }

    render() {
        console.log(this.state.people);

        const { people } = this.state;

        if(!people) {
            return <Loader/>
        }

        const items = this.renderList(people)

        return(
            <div className="list_with_heros">
                <div className="heros">
                    <h3>Star Wars Heros</h3>
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
}