const baseUrl = "http://localhost:8090";

class PostService{

    //List
    static async list(){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/posts`, init);
        return call;
    }

    //Détails
    static async details(id){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/posts/${id}`, init);
        return call;
    }

    //Création
    static async create(body){
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/posts`, init);
        return call;
    }

    //Delete post
    static async delete(id){
        let init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/posts/${id}`, init);
        return call;
    }

    //Update post
    static async update(id, body){
        let init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/posts/${id}`, init);
        return call;
    }
}

export default PostService;