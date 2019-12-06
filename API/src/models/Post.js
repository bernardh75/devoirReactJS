import {Schema,model} from 'mongoose';

const postSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    championnat: {
        type: String,
        required: true,
    },
    imgurl: {
        type: String,
        required: true,
    },
    fiche: {
        type: String,
        required: true,
    }

});

const Post= model('Post', postSchema); // post nom de la table dans la base sans la maj plus le s

export default Post;