import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';


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

    //TODO: Condition ternaire pour gérer les types d'users 
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <a class="navbar-brand" href="/">FifaStats</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">

                            <li class="nav-item">
                                <Link className="nav-link" to={'/ajouter-un-post'}>Ajouter un joueur</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to={'/ajouter-un-championnat'}>Ajouter un championnat</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to={'/classement-et-statistiques'}>Classement et Statistiques</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to={'/users-top'}>Classement des internautes</Link>
                            </li>
                        </ul>
                    </div>
                    <a class="navbar-brand" href="/connexion">Connexion</a>
                    <a class="navbar-brand" href="/inscription">Inscription</a>
                    <button type="button" className="btn btn-secondary" onClick={this.logout}>Logout</button>
                
                </nav>
        )
    }
    
}


export default Header;