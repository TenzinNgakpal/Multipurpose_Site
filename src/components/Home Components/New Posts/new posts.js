import axios from 'axios';
import React, { Component } from 'react';
import './new posts.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: ''
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', post)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label className='Entries'>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label className='Entries'>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label className='Entries'>Author</label>
                <input type="text" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})} />
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;