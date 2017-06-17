import React, { Component } from 'react';
import MailForm from './components/mailForm'
import email from './email.svg';
import './App.css';

class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
            errorMsg: '',
            Sender: '',
            Recipients: '',
            CCList: '',
            BccList: '',
            Subject: '',
            Content: ''
                }
   }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={email} className="App-logo" alt="logo" />
          <h2>Send email</h2>
        </div>
        <MailForm/>
      </div>
    );
  }
  
}

export default App;
