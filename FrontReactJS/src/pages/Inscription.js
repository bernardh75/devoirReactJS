import React, {Component} from 'react';
import UserService from '../services/users.service';

class Inscription extends Component{

    constructor(props){
        super(props);
        this.state = {
            email1: '',
            username1: '',
            password1: ''
        }  
    }

    //Change value instead of id state
    handleChange(e){
        //change state
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    async submit(e){
        e.preventDefault();
        this.setState({success: false});
        let body = {
            email: this.state.email1,
            username: this.state.username1,
            password: this.state.password1
        }; 
        let response = await UserService.create(body);
        if(response.ok){
            this.setState({
                success: true,
                msgSuccess: "User is created with successfull"
            })
        }
    }

    render(){
        return (
            <div className="container">
                <h2>Veuillez compléter ce formulaire pour créer un compte</h2>
                <form onSubmit={(e) => this.submit(e)}>

                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input required id="username1" onChange={(e) => this.handleChange(e)} placeholder="Entrer votre pseudo" type="text" className="form-control" value={this.state.title} onChange={(e) => this.handleChange(e)}/>
                    </div>

                    <div className="form-group">
                        <label>Adresse email</label>
                        <input required id="email1" onChange={(e) => this.handleChange(e)} placeholder="Entrer votre adresse email" type="text" className="form-control" value={this.state.title} onChange={(e) => this.handleChange(e)}/>
                    </div>

                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input required id="password1" onChange={(e) => this.handleChange(e)} placeholder="Entrer votre mot de passe" type="password" className="form-control" onChange={(e) => this.handleChange(e)}/>
                    </div>

                    <button type="submit" className="btn btn-primary">S'inscrire</button>

                </form>

                {
                    this.state.success === true ? <p>{this.state.msgSuccess}</p> : null 
                }

            </div>
        )
    }

}

export default Inscription;