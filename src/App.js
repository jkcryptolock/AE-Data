import React from 'react';
import logo from './logo.svg';
import Select from './Components/Select';
import Table from './Components/Table';
import './App.css';
import Axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accountExecs: [],
      companyData: [],
      loaded: false
    };
  }

  componentDidMount() {
    this.fetchAccountExecs();
  }

  async fetchAccountExecs() {
    await Axios.get('https://codechallenges-accountexecutiveapi.azurewebsites.net/api/users')
    .then(result => {
      this.setState( { accountExecs: result.data } );
    })
    .catch(error => {
      console.log('Error with fetching AEs: ', error);
    });
  }
  
  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Select accountExecs={this.state.accountExecs}/>
        <Table componanyData={this.state.companyData}/>
      </div>
      </>
    );
  }
}
