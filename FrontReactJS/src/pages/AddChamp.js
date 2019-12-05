import React, {Component} from 'react';
import PostService from '../services/posts.service';

class AddChamp extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: '',
            success: false,
            msgSuccess: '',
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
            title: this.state.title,
            body: this.state.content,
            userId: 1,
        }; 
        let response = await PostService.create(body);
        if(response.ok){
            this.setState({
                success: true,
                msgSuccess: "Player is created with successfull"
            })
        }
    }

    render(){
        return (
            <div className="container">
                <h1>Ajouter un championnat</h1>

                <form onSubmit={(e) => this.submit(e)}>

                    <div className="form-group">
                        <label>Nom du championnat</label>
                        <input style={{width: '600px'}} type="text" className="form-control" required id="title" value={this.state.title} onChange={(e) => this.handleChange(e)}/>
                    </div>

                    <div className="form-group">
                        <label>Pays</label>
                        <input style={{width: '600px'}} type="text" className="form-control" required id="content" onChange={(e) => this.handleChange(e)}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </form>

                {
                    this.state.success === true ? <p>{this.state.msgSuccess}</p> : null 
                }

            </div>
        )
    }

}

export default AddChamp;