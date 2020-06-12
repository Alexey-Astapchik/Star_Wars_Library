import React from 'react';
import '../List/List.css'
import SwapiServiceAPI from '../../services/SwapiServiceAPI';
import Loader from '../Loader/Loader';

export default class List extends React.Component {

    swapi = new SwapiServiceAPI()

    state = {
        item: null,
    }

    componentDidMount() {
        this.props.getData().then((item) => {
            this.setState({item})
        });
    }


    renderList(arr) {
        return arr.map((item) => {
            const text = this.props.renderItem(item);
            return (
                <li className="hero_item_info" 
                    key= {item.id}
                    onClick={() => this.props.onItemClick(item.id)}>
                    <p>
                        {text}
                    </p>
                </li>
            )
        })
    }

    render() {
        console.log(this.state.people);

        const { item } = this.state;

        if(!item) {
            return <Loader/>
        }

        const items = this.renderList(item)

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