import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class User extends Component{

    render() {
        let {user} = this.props;
        return <div className="card bg-dark text-white mt-1">
                    <div className="card-body">
                    <h5 className="card-title">{user.name} {user.username}</h5>
                    <p className="card-text">{user.email}</p>
                    <p className="card-text">nombre de postes : {user.nbrPosts}</p>
                    <Link to={`/utilisateurs/${user.id}`} className="btn btn-success me-2">Détails</Link>
                    <Link to={`/utilisateurs/${user.id}/modifier`} className="btn btn-warning">Modifier</Link>
                    </div>
                </div>
    }

}