import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class Post extends Component{

    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }

    componentDidMount(){
        console.log(this.props);
    }

    componentWillMount() {
        //Si l'utilisateur est connecté sinon redirige vers la page de connexion
        if(sessionStorage.getItem("login")) {
            console.log("Call User Feed");
        //Page protégée par une connexion utilisateur/admin 
        } else {
            this.setState({redirect: true});
        }
    }

    //TODO:DELETE
    /*logout() {
        sessionStorage.setItem("userData", '');
        sessionStorage.clear();
        this.setState({redirect: true});
    }*/
    
    render(){

        if (this.state.redirect) {
            return (<Redirect to={'/connexion'} />);
        }

        return(
            <React.Fragment>
            {/*TODO:DELETE*/}
            {/*<button type="button" className="btn btn-secondary" onClick={this.logout}>Logout</button>*/}
            <tr>
                <td>
                    <Link to={`/posts/${this.props.data.id}`}>{this.props.data.id}</Link>
                </td>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.content.substr(0, 20)}...</td>
                <td>
                    <button className="btn btn-danger" onClick={() => this.props.deletePost(this.props.data.id)}>Supprimer</button>
                </td>
            </tr>
            </React.Fragment>
            
        )
    }


}

export default Post;