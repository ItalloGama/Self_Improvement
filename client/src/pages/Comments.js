import axios from "axios";
import React, { useState, useEffect } from 'react'
import Comment from "../components/CommentSection";


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
                : 'http://localhost:3001/api/comments',
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
            <form onSubmit={handleSubmit} id='post-comment'>
            <input
            name="name"
            onChange={(e) => {
            handleChange(e)
            }}/>
            <input
            name="comment"
            onChange={(e) => {
            handleChange(e)
            }}/>
            <button type='submit'>Submit</button>
            </form>
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