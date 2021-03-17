import React, {Component} from 'react';
import Post from '../components/Post';
import PostService from '../services/post.service';

export  default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }
    
    async componentDidMount() {

        let posts = await PostService.list(7);
        this.setState({posts: posts});

    }

    render() {
        let {posts} = this.state;
        return <div className="container">
            <h1>Homepage du blog</h1>
            <p>Vous pouvez retrouvez les derniers posts publiés</p>

            <h2>Les derniers posts</h2>
            <div className="row">
                {posts.length === 0 && <p>Aucun posts pour le moment...</p>}

                {posts.length > 0 && posts.map(post => {
                    return <div className="col-md-4">
                        <Post post={post} />
                    </div>
                })}
            </div>
               

        </div>
    }
}