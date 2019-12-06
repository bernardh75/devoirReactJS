const baseUrl = "http://localhost:8090";

class PostService{
    
    //Liste
    static async list(){
        let init={
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        };
        let call = await fetch(`${baseUrl}/posts`,init);
        return call;
    }

    //details
    static async details(id){
        let init={
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        };
        let call = await fetch(`${baseUrl}/posts/${id}`,init);
        return call;
    }

    //suppression
    static async delete(id){
        let init={
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        }
        let call = await fetch(`${baseUrl}/posts/${id}`,init);
        return call;
    }

    //creation
    static async create(body){
        let init={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/posts`,init);
        return call;
    }

    //update
    static async update(id,body){
        let init={
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            }, 
            body:JSON.stringify(body)
        }
        let call = await fetch(`${baseUrl}/posts/${id}`,init);
        return call;
    }

}
export default PostService;