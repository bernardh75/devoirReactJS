import React, {Component} from 'react';
import Post from '../components/Post';
import PostService from '../services/posts.service';

class Home extends Component{

    constructor(props){
        super(props);
        
        //base de données interne
        this.state = {
            title: "Fifa stats",
            posts: []
        }


    }

    async componentDidMount(){        
        //Récupération des posts depuis l'API
        let response = await PostService.list();
        if(response.ok){
            //La réponse est de type 200
            let data = await response.json();
            console.log(data);
            this.setState({posts: data.posts});
        }
    }


    async deletePost(id){
        let response = await PostService.delete(id);
        if(response.ok){
            let posts = this.state.posts;
            let index = posts.findIndex(post => post.id === id);
            posts.splice(index, 1);

            this.setState({posts: posts});
        }
    }

    render(){
        return(
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Joueur</th>
                            <th>Club actuel</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.length !== 0 ?
                                this.state.posts.map((item, index) => {
                                    return (
                                        <Post key={index} data={item} deletePost={(id) => this.deletePost(id)}/>
                                    )
                                })
                            : <p>Il n'y a aucun post.</p>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;