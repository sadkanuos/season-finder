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
    
    renderContent() {
        if (this.state.errorMessage && !this.state.latitude){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.latitude){
            return <SeasonDisplay latitudeProp={this.state.latitude}/>
        }
        return <Loading message="Please accept the location request"/>
    }

    // In case a base feature is to be added to the render function, a new method can be refactored that has all the contents that are to be rendered. This reduces the amount of changes needed to the individual methods.
    // This is also a great technique to organize and centralize the features.
    
    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        );
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