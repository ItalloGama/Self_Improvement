import React from 'react'
import axios from 'axios'
import { Card } from "react-bootstrap";
function CommentCard(comment) {
        
        const deleteComment = () => {
            axios.delete(`${BASE_URL}/api/comments/${comment.id}`)
            window.location.reload()
    }
    return (
    <div className='cards'>   
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{comment.name}</Card.Title>
                <Card.Text>{comment.comment}</Card.Text>    
                <button onClick={deleteComment}>delete</button>
            </Card.Body>
        </Card>
    </div>    
    )
}
export default CommentCard