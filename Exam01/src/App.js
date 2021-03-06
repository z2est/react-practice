import React, { Component } from 'react';
import './App.css';
import PropTypes from "prop-types";

class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 5000);
  }

  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading" : "We are read"}</div>
  }
}

export default App;
