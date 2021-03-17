import React, {Component} from 'react';
import UserService from '../../services/user.service';

export default class UserAdd extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            name:null,
            username:null,
            email:null
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();

        let {name, username, email} = this.state;

        let data = {
            name: name,
            username: username,
            email: email
        }
        //ajout de l'article
        await UserService.create(data);
        //console.log(response);
        //redirige vers /articles
        this.props.history.push('/utilisateurs');

    }

    render() {
        return <div className="container">
            <h1>Ajouter votre article</h1>

            <form onSubmit={(event) => this.handleSubmit(event)}>

                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" id="name" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>
                
                <div className="form-group">
                    <label>Pseudo</label>
                    <input type="text" id="username" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" id="username" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>
                <button type="submit" className="btn btn-success">Ajouter</button>
            </form>

        </div>
    }

}
