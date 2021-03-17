import React, {Component} from 'react';
/**Import la classe component de react */
import {BrowserRouter, Route, Switch} from "react-router-dom";
/**Import les classes BrowserRouter, Route de react-router-dom */
import Home from './views/Home';
import Header from './components/Header';
import PostsList from './views/Posts/PostsList';
import PostAdd from './views/Posts/PostAdd';
import PostDetails from './views/Posts/PostDetails';
import PostModify from './views/Posts/PostModify';
import UsersList from './views/Users/UsersList';
import UserAdd from './views/Users/UsersAdd';
import UserDetails from './views/Users/UsersDetails';
import UserModify from './views/Users/UsersModify';
import Footer from './components/Footer';


export default class App extends Component{

  /**Systeme de routing */
  render(){
    return <BrowserRouter>

      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={PostsList} />
        <Route exact path="/articles/ajouter" component={PostAdd} />
        <Route exact path="/articles/:id" component={PostDetails} />
        <Route exact path="/articles/:id/modifier" component={PostModify} />

        <Route exact path="/utilisateurs" component={UsersList} />
        <Route exact path="/utilisateurs/ajouter" component={UserAdd} />
        <Route exact path="/utilisateurs/:id" component={UserDetails} />
        <Route exact path="/utilisateurs/:id/modifier" component={UserModify} />
      </Switch>
      <Footer />

    </BrowserRouter>
  }
}