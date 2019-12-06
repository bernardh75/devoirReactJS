import React, {Component} from 'react';
import PostService from '../services/posts.service';

class DetailsPost extends Component{

    constructor(props){
        super(props);
        this.state = {
            post: {},
        }
    }

    async componentDidMount(){
        let id = this.props.match.params.id;
        let response = await PostService.details(id);
        if(response.ok){
            let data = await response.json();
            this.setState({post: data.post});
        }
    }

    async iDeleteThisPostActually(id){
        let response = await PostService.delete(id);
        if(response.ok){
            this.props.history.push('/');
        }
    }



    render(){
        return(
            <div className="container">

                <div>{this.state.post.title}</div>
                <div>{this.state.post.content}</div>
                <div>{this.state.post.championnat}</div>
                <div>
                    <img style={{width: '500px'}} src={this.state.post.imgurl}/>
                </div>

                <h1>{this.state.post ? this.state.post.title : null }</h1>
                <p>{this.state.post ? this.state.post.body : null }</p>

                <button className="btn btn-danger" onClick={() => this.iDeleteThisPostActually(this.state.post.id)}>Supprimer</button>

            </div>
        )
    }


}

export default DetailsPost;