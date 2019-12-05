import {Schema,model} from 'mongoose';

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    } ,
    content: {
        type: String,
        required: true,
    } ,
    date:{
        type:Date,
        default:Date.now
    },
    role:{
        type:String,
    }

});

const Post= model('Post', postSchema); // post nom de la table dans la base sans la maj plus le s

export default Post;