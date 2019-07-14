import React, { Component } from 'react';
import './posts.css'

class Edit extends Component {
    state = {
        id:'',
        post:''
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            post: this.props.data
        })
    }

    handelChange = (e) => {
        let currval = e.target.value
        console.log(currval)
        this.setState({
            post: currval
        })
        console.log(this.state);
        console.log(this.props)
    }

    handelEdit = (id) => {
        this.props.fun()
        fetch(`/Edit/${id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => { return response.json() })
            .then(result => {
                console.log(result);
            })

    }

    render() {
        return (
            <div className="posts"  >
                <input type="text" onChange={this.handelChange} name="content" id="content" value={this.state.post} />
                <button onClick={() => { this.handelEdit(this.props.id) }} id="edit">submit</button>
            </div>
        );
    }
}

export default Edit;