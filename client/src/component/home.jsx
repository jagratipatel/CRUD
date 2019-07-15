import React, { Component } from 'react';
import Posts from './posts';
import {Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
    state = {
        data: [],
        edit:false
    }

    componentDidMount() {
        fetch('/getData')
            .then(response => { return response.json() })
            .then(result => {
                this.setState({
                    data: result.post
                })
            })
    }

   componentDidUpdate(prevState) {
        if (prevState !== this.state) {
          this.componentDidMount();
        }
      }
 


    render() {
        return (
            <div id="read">
                <div id="showPost">
                     <button className="btn1"><Link to="/writepost" className="btn1">write post</Link></button>
                    {this.state.data.map(post => <Posts data={post} key={post._id} id={post._id} edit={this.state.edit}  />)}
                </div>
            </div >
        );
    }
}

export default Home;
