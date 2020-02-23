import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../Register';
import Login from '../Login';
import Home from "../Home";
import Detail from "../Detail";
import PrivateRoute from "../PrivateRoute";
import Profile from "../Profile";
import UserAnuncios from "../UserAnuncios";
import Create from "../Create";
import Favoritos from "../Favoritos";
import ResetPass from "../ResetPass";
import Reset from "../Reset";


const App = ({ session, updateSession }) => {
    updateSession(session.session);
    return (
        <Switch>
            <Route path="/register" exact component={Register} />
            <Route path='/login' exact component={Login}/>
            <Route path='/' exact component={Home}/>
            <Route path='/detail/:name/:id' exact component={Detail}/>
            <Route path='/anuncios/:username' exact component={UserAnuncios} />
            <Route path='/resetpass' exact component={ResetPass} />
            <Route path='/reset/:email/:token' exact component={Reset} />
            <PrivateRoute path="/profile" exact component={Profile}/>
            <PrivateRoute path="/create" exact component={Create}/>
            <PrivateRoute path="/favoritos" exact component={Favoritos}/>
        </Switch>
)};

export default App;