import React from 'react'
import axios from 'axios'
import { Card } from "react-bootstrap";
import BASE_URL from '../globle';
function CommentCard(comment) {
        
        const deleteComment = () => {
            axios.delete(`${BASE_URL}/comments/${comment.id}`)
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