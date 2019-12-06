
import Post from "../models/Post";

class PostController{
    
    static async list(request,response){
       /* test lorsquil ny a pas de bdd
       
       let posts=[
            {
                id: 1,
                title: "Mon titre",
                content: " Mon contenu"
            },
            {
                id: 2,
                title: "Mon titre 2",
                content: " Mon contenu 3"
            },
            {
                id: 3,
                title: "Mon titre 3",
                content: " Mon contenu 3"
            },
        ];

        return response.status(200).json(posts);
        */
        let status=200;
        let body={};

/**
 * Plusieurs méthodes: 
 *      Post.find()     ->     lister tous les posts
 *      Post.find({date:...})     ->     lister tous les posts
 *      Post.findOne({slug:"mon-titre"})    ->  retoune le premier post qui a comme slug mon-titre
 *      Post.findById("123456")
 * 
 * Si les requetes sont pas evidente en mongo on peut recuperer l'ensemble des posts puis les parcourir avec un map et créer des filters 
 * 
 */

        try {
            // récuperation de tout les posts 
            let posts = await Post.find();
            body={posts, 'message':'List posts'};

        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);

    }

    static async create(request,response){
        let status=200;
        let body={};
        try {
            let post=await Post.create({
                id: request.body.id,
                title: request.body.title, 
                content: request.body.content,
                championnat: request.body.championnat,
                imgurl: request.body.imgurl,
                fiche: request.body.fiche
            });
            body={post,'message': 'okay'}
        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);
    }


    static async details ( request,response){
        let status=200;
        let body={};
        try {
            let id = {id: request.params.id};
            let post= await Post.findOne(id);
            body={post,'message': 'un post'}

        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);
    }
    static async delete ( request, response){
        let status=200; 
        let body={};
        try{
            let id = {id: request.params.id}; 
            let post = await Post.findOne(id);
            post.delete();
            body={post, 'message':'un post'};
        }
        catch(error){
            status=500;
            body={'message': error.message}
        }
        return response.status(status).json(body);
    }

    static async update (request, response){
        let status=200; 
        let body={};
        try{
            let id = {id: request.params.id};  
            let post = await Post.findOne(id);
            await post.update(request.body);
            body={post, 'message':'un post'};
        }
        catch(error){
            status=500;
            body={'message': error.message}
        }
        return response.status(status).json(body);
    }
}

export default PostController;