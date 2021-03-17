import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PostService from '../../services/post.service';

export default class PostDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await PostService.detail(id);
        this.setState({post: response.data});
    }

    async handleDelete(){
        let {post} = this.state;
        await PostService.delete(post.id);
        this.props.history.push('/articles');
    }

    render() {
        let {post} = this.state;
        return <div className="container">
            <h1>Article - {post && post.title}</h1>
            <h2>Contenue :</h2>
            <p>{post.body}</p>
            <Link to={`/articles/${post.id}/modifier`} className="btn btn-success me-2">Modifier l'annonce</Link>
            <button className="btn btn-danger" onClick={() => this.handleDelete()}>Supprimer</button>
        </div>
    }
}