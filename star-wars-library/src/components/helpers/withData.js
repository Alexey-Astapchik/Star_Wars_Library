import React from 'react'
import Loader from '../Loader/Loader'

const withData = (View, getData) => {
    return class extends React.Component{

        state = {
            item: null,
        }
    
        componentDidMount() {
            getData().then((data) => {
                this.setState({data})
            });
        }

        render () {
            const { data } = this.state;

            if(!data) {
                return <Loader/>
            }
            return <View {... this.props} data={data}/>
        }
    }
}

export default withData;