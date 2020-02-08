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
      loaded: false,
      selectDisplay: 'Select an account executive'
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

  fetchAECompanies(accountExecEmail, accountExec) {
    this.setState( { selectDisplay: accountExec });
    const query = {
      accountExecutive: accountExecEmail
    }
    Axios.post('https://codechallenges-accountexecutiveapi.azurewebsites.net/api/companies', query)
      .then(result => {
        console.log(result)
        this.setState( { companyData: result.data } );
      })
      .catch(error => {
        console.log('Error with fetching companies: ', error);
      });
  }
  
  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Select accountExecs={this.state.accountExecs}
                selectDisplay={this.state.selectDisplay}
                fetchCompanies={this.fetchAECompanies.bind(this)}/>
        <Table companyData={this.state.companyData}/>
      </div>
      </>
    );
  }
}
