import React, {Component} from 'react';
import UserService from '../services/users.service';
import {Redirect} from 'react-router-dom';


class Connexion extends Component{

    constructor(props){
        super(props);
        this.state = {
            email1:'',
            password1:'',
            redirect: false
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
            password: this.state.password1
        }; 
        let response = await UserService.connexion(body);
        let data = await response.json();
        if( response.ok && (data.user !== undefined) ){
            this.setState({
                success: true,
                msgSuccess: "User is connected with successfull"
            })
            sessionStorage.setItem("login", true);
            let role = data.user.role.role;
            console.log(role);
            sessionStorage.setItem("admin", role);
            this.setState({redirect: true});
        } else {
            this.setState({msgSuccess: data.message});  
            sessionStorage.setItem("login", false);
        }
    }

    render(){

        if (this.state.redirect === true) {
            return (<Redirect to={'/'} />);
        }

        return (

            <div className="container">
                <h2>Veuillez entrer vos informations</h2>
                <form onSubmit={(e) => this.submit(e)}>

                    <div className="form-group">
                        <label>Email</label>
                        <input style={{width: '500px'}} placeholder="Entrer votre adresse email" type="text" className="form-control" required id="email1" value={this.state.title} onChange={(e) => this.handleChange(e)}/>
                    </div>

                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input style={{width: '500px'}} placeholder="Entrer votre mot de passe" type="password" className="form-control" required id="password1" onChange={(e) => this.handleChange(e)}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Se connecter</button>

                </form>

                {
                    this.state.success === true ? <p>{this.state.msgSuccess}</p> : null 
                }

            </div>
        )
    }

}

export default Connexion;