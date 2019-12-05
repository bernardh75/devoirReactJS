import Comment from "../models/Comment";

class CommentsController{
    static async create(request,response){
        let status=200;
        let body={};
        try {   
            let comment=await Comment.create({
                title:request.body.title,
                content:request.body.content,
                post_id:request.body.post_id
            });
            body={comment,'message': 'okay'}
        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);
    }    
    static async details(request,response){
        let status=200;
        let body={};

        //try-catch --> tant que le code est bon on reste dans le try si ca plante on va dans le catch  
        try {   
            let comment=await Comment.findById(request.params.id).populate('post_id');
            body={comment,'message': 'Comment details'}
        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);
    }

}

export default CommentsController;