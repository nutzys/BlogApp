import React, { useState } from 'react'
import { useQuery } from 'react-query';
import getUsers from '../api/userApi';
import Users from '../models/usermodel';
import UserCard from './UserCard';

const UserList = () => {

  const [users, setUsers] = useState<Users[]>([]);

  const {data, isLoading} = useQuery('users', getUsers, {
    onSuccess: (data) => setUsers(data)
  })

  if(isLoading) return (<h1>Loading...</h1>)

  return (
    <>
        {data.map((user : Users) => (<UserCard id={user.id} name={user.name} email={user.email} username={user.username} phone={user.phone} website={user.website}/>))}
    </>
  )
}

export default UserList
