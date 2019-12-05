import {Schema,model} from 'mongoose';

const commentSchema = new Schema({
    title: {
        type: String,
        required: true,
    } ,
    content: {
        type: String,
        required: true,
    } ,
    post_id:{
        type:Schema.Types.ObjectId, 
        ref:'Post', 
        required: true,
    }
});

const Comment= model('Comment',commentSchema); // post nom de la table dans la base sans la maj plus le s

export default Comment;