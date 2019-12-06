import User from "../models/User";

class UserController{

    static async list(request,response){
        let status=200;
        let body={};
        try {
            // récuperation de tout les posts 
            let users = await User.find().populate("role");
            body={users, 'message':'List users'};

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
            let user=await User.create({
                email:request.body.email,
                username:request.body.username,
                password:request.body.password
            });
            body={user,'message': 'okay'}
        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);
    }
    
    static async connexion(request,response){
        let status=200;
        let body={};
        try {
            let user=await User.findOne({
                email:request.body.email
            }).populate("role");

            if (user.password === request.body.password) {
                body={user,'message': 'okay'}
            } else {
                body={'message':'email ou mdp incorrect'};
            }
            
        } catch (error) {
            status=500;
            body={'message':error.message};
        }
        return response.status(status).json(body);
    }
    
}

export default UserController;