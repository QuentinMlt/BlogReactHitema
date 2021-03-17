import React, {Component} from 'react';
import UserService from '../../services/user.service';

export default class UserModify extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            name: "",
            username: "",
            email: ""
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await UserService.detail(id);
        this.setState({
            user: response.data,
            name: response.data.name,
            username: response.data.username,
            email: response.data.email

        });

    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {user, name, username, email} = this.state;

        let data = {
            name: name,
            username: username,
            email: email
        }

        await UserService.update(user.id, data)
        this.props.history.push(`/utilisateurs/${user.id}`);
    }
    

    render() {
        let {user, name, username, email} = this.state;
       return <div className="container">
           <h1>Modification de l'utilisateur n°{user.id}</h1>

           <form onSubmit={(e) => this.handleSubmit(e)}>

                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" className="form-control" id="name" required value={name} onChange={(e) => this.handleChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Pseudo</label>
                    <input type="text" className="form-control" id="username" required value={username} onChange={(e) => this.handleChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" id="email" required value={email} onChange={(e) => this.handleChange(e)}/>
                </div>

                <button className="btn btn-success mt-2" type="submit">Modifier</button>

           </form>
       </div>
    }
}