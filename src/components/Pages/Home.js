import React, { Component } from 'react';
import axios from 'axios'
import Post from '../Home Components/Posts/posts';
import FullPost from '../Home Components/Full Posts/full posts';
import NewPost from '../Home Components/New Posts/new posts';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            selectedPostId: null
        }
    }
    
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                const posts = response.data.slice(0, 8)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Tabula Smaragdina'
                    }
                })
                console.log(updatedPosts)
                this.setState( {posts: updatedPosts} )
            })
            .catch( err => console.log(err) )
    }

    selectPostHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render () {
        return (
            <div>
                <h1>Home</h1>
                <section className="Posts">
                    <NewPost />
                </section>
                <section className="Posts">
                    {
                        this.state.posts.map( post => <Post 
                                key={post.id} 
                                title={post.title} 
                                author={post.author}
                                clicked={() => this.selectPostHandler(post.id)} />
                        )
                    }
                </section>
                <section className="Posts">
                    <FullPost id={this.state.selectedPostId} />
                </section>
            </div>
        );
    }
}
export default Home;