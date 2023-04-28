import React from 'react'

interface Props {
    id: number,
    title: string,
    body: string
}

const Post : React.FC<Props> = (props) => {
  return (
    <div className='post'>
        <div className='title-container'>
            <h4>{props.title}</h4>
        </div>
        <div className="body-container">
            <p>{props.body}</p>
        </div>
    </div>
  )
}

export default Post
