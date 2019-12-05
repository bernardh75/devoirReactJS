import React, {Component} from 'react';
/*import PostService from '../services/posts.service';
import Post from './Post';*/

class Footer extends Component{
    constructor(props){
        super (props);
    }

    componentWillMount(){
        console.log("Je suis dans le Will Mount");
    }

    async componentDidMount(){
        
    }

    render(){
        return(
            <nav class="navbar navbar-light bg-light">
                <p style={{marginLeft: '350px'}}> ©2019 FifaStats — All rights reserved. Privacy Policy, terms & conditions </p>
            </nav>
        )
    }
}

export default Footer; 