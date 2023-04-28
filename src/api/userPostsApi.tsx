import axios from "axios";

export default function getUserPosts(uid: number){
   return axios.get(`https://jsonplaceholder.typicode.com/user/${uid}/posts`).then(res => res.data);
}