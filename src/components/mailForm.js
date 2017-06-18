import React, { Component } from 'react';
import '../App.css';
import 'whatwg-fetch';
import { config } from '../config.js';

class MailForm extends Component {

  constructor() {
    super();
    this.state = {
      errorMsg: ''
    }
    this.handleSenderChange = this.handleSenderChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleCCListChange = this.handleCCListChange.bind(this);
    this.handleBccListChange = this.handleBccListChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleBtnSendClick = this.handleBtnSendClick.bind(this);
  }

  handleSenderChange(e) {
    this.setState({Sender: e.target.value});
  }
  handleToChange(e) {
    this.setState({Recipients: e.target.value});
  }
  handleCCListChange(e) {
    this.setState({CCList: e.target.value});
  }
  handleBccListChange(e) {
    this.setState({BccList: e.target.value});
  }
  handleSubjectChange(e) {
    this.setState({Subject: e.target.value});
  }
  handleContentChange(e) {
    this.setState({Content: e.target.value});
  }

handleBtnSendClick(){
 
  return fetch(config.apiPostUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
           	body:            
            JSON.stringify({
            Sender: this.state.Sender,
            Recipients: this.state.Recipients,
            CCList: this.state.CCList,
            BccList: this.state.BccList,
            Subject: this.state.Subject,
            Content: this.state.Content
        })
    })  
    .then(response => { this.setState({errorMsg: "Instruction processed without error"})} )
    .catch(error => { this.setState({errorMsg: "There appears to be a problem. Please refresh the page and try again later."}) 
    } )
 }

  render() {
    return (
        <div className="Email-Sender">  
          {this.state.errorMsg}  
        <h5>From:      <input type="text" size="70" name="Sender" 
                          onChange={ this.handleSenderChange }/><br/></h5> 
        <h5>To:        <input type="text" size="70"
                          onChange={ this.handleToChange }/><br/></h5>
        <h5>cc:        <input type="text" size="70" 
                          onChange={ this.handleCCListChange }/><br/></h5>
        <h5>bcc:       <input type="text" size="70" 
                          onChange={ this.handleBccListChange }/><br/></h5>
        <h5>Subject:   <input type="text" size="70"
                          onChange={ this.handleSubjectChange }/><br/></h5>
        <textarea rows="10" cols="75"
                         onChange={ this.handleContentChange }/><br/>
        <button onClick={this.handleBtnSendClick} className="btnSend">
          Send             
        </button>
        </div>
    );
  }
}

export default MailForm;