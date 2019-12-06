import React, {Component} from 'react';
import PostService from '../services/posts.service';

class ModifyPost extends Component{

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
    
    async submit(e) {
        e.preventDefault();
        this.setState({success: false});
        let body = {
            title: this.state.title,
            content : this.state.content,
            championnat : this.state.championnat,
            imgurl: this.state.imgurl,
            fiche: this.state.fiche
        }; 
        console.log(body);
        let id = this.props.match.params.id;
        console.log(id);
        let response = await PostService.update(id, body);
        if(response.ok){
            this.setState({
                success: true,
                msgSuccess: "Player is modified with successfull"
            })
        }
    }

    render(){
        return (
            <div className="container">
                <br></br>
                <h2>Modifier un joueur</h2>

                <div className="row">
                    <div className="col-md-6">
                    <form onSubmit={(e) => this.submit(e)}>
                        
                        <div className="form-group">
                            <label>Nom du joueur</label>
                            <input style={{width: '500px'}} type="text" className="form-control" required id="title" onChange={(e) => this.handleChange(e)}/>
                        </div>

                        <div className="form-group">
                            <label>Club actuel</label>
                            <input style={{width: '500px'}} type="text" className="form-control" required id="content" onChange={(e) => this.handleChange(e)}/>
                        </div>

                        <div className="form-group">
                            <label>Championnat concerné</label>
                            <input style={{width: '500px'}} type="text" className="form-control" required id="championnat" onChange={(e) => this.handleChange(e)}/>
                        </div>

                        <div className="form-group">
                            <label>Image associé</label>
                            <input style={{width: '500px'}} type="text" className="form-control" required id="imgurl" onChange={(e) => this.handleChange(e)}/>
                        </div>

                        <div className="form-group">
                            <label>Fiche du joueur</label>
                            <textarea style={{width: '500px'}} rows="10" cols="10" className="form-control" required id="fiche" onChange={(e) => this.handleChange(e)}>
                            </textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Modifier</button>
                    </form>
                    </div>
                    <div className="col-md-6">
                        <img src = "https://image.flaticon.com/icons/svg/606/606668.svg" />
                    </div>
                </div>
                
                {
                    this.state.success === true ? <p>{this.state.msgSuccess}</p> : null 
                }

            </div>
        )
    }
}

export default ModifyPost;