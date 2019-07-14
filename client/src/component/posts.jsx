import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './posts.css';
import Edit from './edit'

class Posts extends Component {

    state = {
        edit: false
    }

    handelDelete = (id) => {
        fetch(`/Delete/${id}`)
        console.log(this.props.data);
    }

    handelClick = () => {
        let val;
        if(this.state.edit===false){
            val = true;
        }
        else{
            val = false;
        }

        this.setState({
            edit: val
        })
    }

    render() {
        return (
            <div className="posts"  >
                {this.state.edit ? <Edit id={this.props.id} data={this.props.data.post} fun={this.handelClick} />
                    : <div id="outer">
                        <input type="text" readOnly name="content" id="content" value={this.props.data.post} />
                        <div id="controls">
                            <button className="btn" onClick={() => { this.handelDelete(this.props.id) }}>Delete</button>
                            <button className="btn" onClick={this.handelClick}>Edit</button>
                            <Link to="/writepost" className="btn">write post</Link>
                        </div>
                    </div>
                }
            </div>


        );
    }
}

export default Posts;