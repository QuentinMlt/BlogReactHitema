import axios from 'axios';
const baseUrl = "https://jsonplaceholder.typicode.com";

export default class PostService{

    /**
     * Get list of posts
     * @returns {Promise<AxiosResponse<any>>}
     */

    static async list(limit=null){
        let call =  await axios.get(`${baseUrl}/posts`);
        let posts = limit != null ? call.data.slice(0, limit) : call.data;

        let users = await axios.get(`${baseUrl}/users`);
/*
        for (let post of posts){
            for (const user of users.data){
                if(user.id === post.userId)
                post.user = user;
            }
        }
*/
        return posts.map(post => {
            post.user = users.data.find(user => user.id === post.userId);
            return post;
        });


        return posts;

    }


    static async create(data){
        return await axios.post(`${baseUrl}/posts`, data);
    }

    static async update(id, data){
        return await axios.put(`${baseUrl}/posts/${id}`, data);
    }


    static async detail(id){
        return await axios.get(`${baseUrl}/posts/${id}`);
    }

    static async delete(id){
        return await axios.delete(`${baseUrl}/posts/${id}`);
    }
}