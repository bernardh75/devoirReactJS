import React, {Component} from 'react';
import PostService from '../services/posts.service';

class Stats extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                
                <h2>Veuillez entrer vos informations</h2>
                <a href="/forgotpassword">Mot de passe oublié ?</a>

            </div>
        )
    }

}

export default Stats;