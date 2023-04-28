import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import getSingleUser from '../api/singleUserApi';
import Users from '../models/usermodel';
import getUserPosts from '../api/userPostsApi';
import Posts from '../models/postmodel';
import Post from '../components/Post';

const User = () => {

    const [user, setUser] = useState<Users>();
    const [posts, setPosts] = useState<Posts[]>([]);

    const params = useParams();

    const userQuery = useQuery({
        queryKey: ['user', params.id],
        queryFn: (id) => getSingleUser(Number(params.id)),
        onSuccess: (data) => setUser(data)
    })

    const postQuery = useQuery({
        queryKey: ['posts', params.id],
        queryFn: (id) => getUserPosts(Number(params.id)),
        onSuccess: (data : Posts[]) => setPosts(data)
    })

    if(userQuery.isLoading) return (<h1>Loading...</h1>)

    return (
        <div>
            <div className="user-container">
                <div className="user-picture-container">
                    <div className='picture'>Picture</div>
                    <h1>{user?.name}</h1>
                </div>
                <div className="details-container">
                    <div className='details'><span>Username:</span> {user?.username}</div>
                    <div className='details'><span>E-Mail:</span> {user?.email}</div>
                    <div className='details'><span>Phone:</span> {user?.phone}</div>
                    <div className='details'><span>Website: </span><a href="#">{user?.website}</a></div>
                </div>
            </div>
            <div className='posts-title'>
                <h1>User Posts</h1>
            </div>
            <div className='post-container'>
             {posts.map((post : Posts) => (<Post id={post.id} title={post.title} body={post.body}/>))}
            </div>
        </div>
  )
}

export default User
