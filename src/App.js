import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchComponent from '../src/Components/SearchComponent';
import { connect } from 'react-redux';
import DetailsComponent from './Components/DetailsComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
         <SearchComponent val={5}/>
         <DetailsComponent />
      </div>
      )
  }

}

function mapStateToprops(state) {
  const details = state.data;
  return details;
}

export default connect(mapStateToprops)(App);
