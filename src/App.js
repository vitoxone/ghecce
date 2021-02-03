import React, { Component } from 'react'
import logo from './logo.svg';
import Construction from './components/Construction';
import './App.css';

export class App extends Component {
  // state = {
  //   landingPageData: {},
  // }
  // getlandingPageData() {
  //   this.setState({landingPageData : JsonData})
  // }

  // componentDidMount() {
  //   this.getlandingPageData();


  render() {
    return (
      <div>
        <Construction />
      </div>
    )
  }
}

export default App;



