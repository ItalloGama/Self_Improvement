import axios from "axios";
import React, { useState, useEffect } from 'react'
import Comment from "../components/CommentSection";
import { Form } from "react-bootstrap";


const Home = () => {
    const [comment, setComment] = useState({
        name:'',
        comment:''
    })
    const [comments, setComments] = useState([])
    
    const handleChange = (e) => {
        e.preventDefault()
        setComment({ ...comment, [e.target.name]: e.target.value })
    }

    const addNewQuote = async (comment) => {
        try {
        const res = await axios.post(
            process.env.NODE_ENV === 'production'
                ? `${window.location.origin}/api/comments`
                : `http://localhost:3001/api/comments`,
            comment
        )
        return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const getQuotes = async () => {
        const res = await axios.get(
            `http://localhost:3001/api/comments`
        )
        setComments(res.data.comment)
        }

        useEffect(() => {
            getQuotes()
        }, [comment])

    const handleSubmit = (e) => {
    e.preventDefault()
    addNewQuote(comment)
    getQuotes()
    document.getElementById('post-comment').reset()
    window.location.reload()
}

return (
    <div> 
        <div>Create Comment</div>
        <div>
            <Form onSubmit={handleSubmit} id='post-comment'>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        onChange={(e) => {
                        handleChange(e)
                        }}/>
                </Form.Group >
                <Form.Group className="mb-3">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        name="comment"
                        onChange={(e) => {
                        handleChange(e)
                        }}/>
                    <button type='submit'>Submit</button>
                </Form.Group>
            </Form>
        <div className="commentForm">
            {comments.map((comment => {
            
                return  (
                    <Comment
                    key={comment._id}
                    id={comment._id}
                    name={comment.name}
                    comment={comment.comment}
                />
                )
                }
            ))
        }
        </div>
        </div>
    </div>
)
}
export default Home