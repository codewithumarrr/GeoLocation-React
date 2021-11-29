import React from 'react'
import ReactDOM from 'react-dom'
import Hemisphere from './Hemisphere'
import style from "./images/style.css"

class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {latitude: null, errorMsg : ''}
    

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({latitude:position.coords.latitude }) ,
      (error)   => this.setState({errorMsg:error.message})
    );
  } // end of constructor

    



  render(){  //start of render
    if(!this.state.latitude && this.state.errorMsg)
    { 
        return (<h1> {this.state.errorMsg} </h1>);

    } else if(!this.state.errorMsg && this.state.latitude)
    {
        return < Hemisphere latitude={this.state.latitude} />

    }else {
        return <h1> there is a technical issue </h1>
    }
  } 
  
}

ReactDOM.render(<App />,document.getElementById("root"))
