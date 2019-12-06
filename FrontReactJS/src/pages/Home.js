import React, {Component} from 'react';
import Post from '../components/Post';
import PostService from '../services/posts.service';

class Home extends Component{

    constructor(props){
        super(props);
        //base de données interne
        this.state = {
            title: "Classement Ballon d'Or - 2019",
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
            this.setState({
                posts:data.posts
            });
        }
    }

    async addFavPost(id) {
        console.log("addFavPost");
    }

    render(){
        return(
            <div>
                <br></br>
                <h2>{this.state.title}</h2>
                <img style={{width: 1350, height: 600}} src="https://photos.lci.fr/images/1024/576/ballon-d-or-2019-france-football-7332bc-0@1x.jpeg" />
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Joueur</th>
                            <th>Club</th>
                            <th>Championnat</th>
                            <th>Aperçu</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.length !== 0 ?
                                this.state.posts.map((item, index) => {
                                    return (
                                        <Post key={index} data={item}/>
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