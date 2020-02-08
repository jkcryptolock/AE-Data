import React from 'react';
import logo from './logo.svg';
import Select from './Components/Select';
import Table from './Components/Table';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accountExecs: [],
      companyData: []
    };
  }
  
  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <Select accountExecs={this.state.accountExecs}/>
      <Table componanyData={this.state.companyData}/>
      </>
    );
  }
}
