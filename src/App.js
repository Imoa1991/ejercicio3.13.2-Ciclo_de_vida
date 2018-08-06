import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Button from './components/Button';

const initialMenu = [
  {
    "label": "inicio",
    "link": "#inicio"
  },
  {
    "label": "inicio2",
    "link": "#inicio2"
  }
];

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuItems: initialMenu
    }
    this.secondCall = this.secondCall.bind(this);
  }
  componentDidMount(){
    this.callToTheAPI();
  }
  callToTheAPI() {
    fetch('https://three-random-reasons-mdqknjcwpl.now.sh/').then(
      response => {
        return response.json();
      }
    ).then(
      dataFromAPI => {
        this.setState({
          menuItems: dataFromAPI
        })
      }
    )
  }
  secondCall() {
    alert('soy la segunda llamada a API');
    this.callToTheAPI();
  }
  render() {
    return (
      <div className="App">
        <Menu menuItems={this.state.menuItems}/>
        <Button secondCall={this.secondCall} />
      </div>
    );
  }
}

export default App;
