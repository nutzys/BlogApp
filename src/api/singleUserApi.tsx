import axios from "axios";
import { QueryFunctionContext } from "react-query";

export default function getSingleUser(id : number){
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.data);
}