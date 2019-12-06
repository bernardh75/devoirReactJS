import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import UserService from '../services/users.service';


class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
        this.logout = this.logout.bind(this);
    }

    logout() {
        sessionStorage.setItem("login", false);
        sessionStorage.clear();
        this.setState({redirect: true});
    }

    login(){
        if (sessionStorage.getItem("login") === null) {
            //non connecté
            console.log("non connecté");
        } else 
        //connecté
        console.log("connecté");
    }

    //TODO: Condition ternaire pour gérer les types d'users 
    render(){

        if (sessionStorage.getItem("login") === null) {
            //non connecté
            console.log("non connecté");
            return(
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">FifaStats</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link className="nav-link" to={'/ajouter-un-joueur'}>Ajouter un joueur</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to={'/classement-et-statistiques'}>Classement par championnat</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to={'/users-top'}>Joueurs Favoris</Link>
                            </li>
                        </ul>
                    </div>
                    <a class="navbar-brand" href="/connexion">Connexion</a>
                    <a class="navbar-brand" href="/inscription">Inscription</a>
                </nav>
            )
        } else 
        //connecté
        console.log("connecté");
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">FifaStats</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link className="nav-link" to={'/ajouter-un-joueur'}>Ajouter un joueur</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={'/classement-et-statistiques'}>Classement par championnat</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={'/users-top'}>Joueurs Favoris</Link>
                        </li>
                    </ul>
                </div>
                <a class="navbar-brand" href="/inscription">Inscription (autres comptes)</a>
                <button type="button" className="btn btn-secondary" onClick={this.logout}>Logout</button>
            </nav>
        )
        
    }
    
}


export default Header;