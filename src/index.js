import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = { latitude: null, errorMessage: ''};        // state object that would contain relevant data for the component
    // }

    // refactoring the constructor declaration
    state = {latitude: null, errorMessage: ''};     // equivalent to constructor definition
    
    render() {
        if (this.state.errorMessage && !this.state.latitude){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.latitude){
            return <SeasonDisplay latitudeProp={this.state.latitude}/>
        }
        return <Loading message="Please accept the location request"/>
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // setState updates the states
                this.setState({ latitude: position.coords.latitude })
            },
            err => {
                this.setState({errorMessage: err.message })
            }
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);