import axios from 'axios';
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class UserService{
    /**
     * Get list of posts
     * @returns {Promise<AxiosResponse<any>>}
     */

     static async list(){
        let response =  await axios.get(`${baseUrl}/users`);
        let users = response.data;

        for (let user of users) {
            let responsePost = await axios.get(`${baseUrl}/users/${user.id}/posts`);
            let posts = responsePost.data;
            user.nbrPosts = posts.length;
        }

        return users;

        
/*
return limit != null ? call.data.slice(0, limit) : call.data;S
        if(limit != null){
            return call.data.splice(0,limit);
        }else{
            return call.data;
        }
*/        


    }

    static async create(data){
        return await axios.post(`${baseUrl}/users`, data);
    }

    static async detail(id){
        return await axios.get(`${baseUrl}/users/${id}`);
    }

    static async update(id, data){
        return await axios.put(`${baseUrl}/users/${id}`, data);
    }
    
    static async delete(id){
        return await axios.delete(`${baseUrl}/users/${id}`);
    }
}