import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './writepost.css';

class Writepost extends Component {

  constructor() {
    super();
    this.msg = React.createRef();
    this.username = React.createRef();
    this.button = React.createRef();
  }


  handelClick = () => {
    console.log("clicked");
    let msg = { msg: this.msg.current.value }
    console.log(msg.name);
    fetch('/sendData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(msg)
    }).then(response => { return response.json() })
      .then(result => {
        console.log(result);
      })

    setTimeout(() => {
      this.button.current.innerText = "sent";
      this.msg.current.value = '';
      setTimeout(() => {
        this.button.current.innerText = "post";
      }, 1000);
    }, 1000)
  }

  render() {
    return (
      <div id="back">
        <div id="postIt">
          <textarea ref={this.msg}  name="post" id="post"></textarea>
          <button ref={this.button} onClick={this.handelClick} className="postit" >post it</button>
          <button className="postit"><Link to="/" className="postit">Home</Link></button>
        </div>
      </div>
    );
  }
}

export default Writepost;