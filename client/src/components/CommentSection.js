import React from 'react'
import axios from 'axios'

function CommentCard(comment) {
        
        const deleteComment = () => {
            axios.delete(`http://localhost:3001/api/comments/${comment.id}`)
            window.location.reload()
    }
    return (
        <div className="Quote-card">
            <div>
                <h3>{comment.name}</h3>
                <p>{comment.comment}</p>    
                <button onClick={deleteComment}>delete</button>
            </div>
        </div>
    )
}
export default CommentCard