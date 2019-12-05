const baseUrl = "http://localhost:8090";

class UserService{

    //Création
    static async create(body){
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/users/create`, init);
        return call;
    }

    //Connexion
    static async connexion(body){
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/users/connexion`, init);
        return call;
    }

}

export default UserService;