import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import PostService from '../services/posts.service';

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
    
    async deletePost(id) {
        let response = await PostService.delete(id);
        if(response.ok){
            this.props.history.push('/');        
        }
    }
    
    render(){

        if (this.state.redirect) {
            return (<Redirect to={'/connexion'} />);
        }

        return(
            <tr >
                <td>
                    <Link to={`/posts/${this.props.data.id}`}>{this.props.data.id}</Link><br/>
                </td>
                <td>{this.props.data.title}</td>
                <td>{this.props.data.content}</td>
                <td>{this.props.data.championnat}</td>
                <td>
                    <img style={{width: '500px'}} src={this.props.data.imgurl}/>
                </td>
                <td>
                    <button 
                    className="btn btn-danger" 
                    onClick={() => this.deletePost(this.props.data.id)}>Supprimer</button>
                    <br></br>
                    <button className="btn btn-primary">
                        <Link to={`/modifier-un-joueur/${this.props.data.id}`}>Modifier</Link>
                    </button>
                    <br></br>
                    <button 
                    className="btn btn-success">Ajouter aux favoris</button>
                </td>
            </tr>
        )
    }
}

export default Post;