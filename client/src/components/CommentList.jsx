import React from 'react'

const CommentList = ({ comments }) => {
    return (
        <>
            <h3>
                Comments :
            </h3>
            {comments.map((comment, index) => (
                <div key={index}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>
            ))}
        </>
    )
}

export default CommentList