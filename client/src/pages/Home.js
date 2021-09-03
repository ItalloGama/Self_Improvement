import axios from "axios";
import React, { useState, useEffect } from 'react'
import { Form } from "react-bootstrap";
import QuoteCard from "../components/QuoteCard";


const Home = () => {
    const [quote, setQuote] = useState({
        name:'',
        author:'',
        quote:''
    })
    const [quotes, setQuotes] = useState([])
    
    const handleChange = (e) => {
        e.preventDefault()
        setQuote({ ...quote, [e.target.name]: e.target.value })
    }

    const addNewQuote = async (quote) => {
        try {
        const res = await axios.post(
            process.env.NODE_ENV === 'production'
                ? `${window.location.origin}/api/quotes`
                : 'http://localhost:3001/api/quotes',
            quote
        )
        return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const getQuotes = async () => {
        const res = await axios.get(
            `http://localhost:3001/api/quotes`
        )
        setQuotes(res.data.quotes)
        }

        useEffect(() => {
            getQuotes()
        }, [quote])

    const handleSubmit = (e) => {
    e.preventDefault()
    addNewQuote(quote)
    getQuotes()
    document.getElementById('post').reset()
    window.location.reload()
}

return (
    <div> 
        <h2>Create Quote</h2>
        <div>
            <Form onSubmit={handleSubmit} id='post'>
            <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control
            name="name"
            onChange={(e) => {
            handleChange(e)
            }}/>
            </Form.Group >
            <Form.Group className="mb-3" >
            <Form.Label>Author</Form.Label>
            <Form.Control
            name="author"
            onChange={(e) => {
            handleChange(e)
            }}/>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Quote</Form.Label>
            <Form.Control
            name="quote"
            onChange={(e) => {
            handleChange(e)
            }}/>
            
            <button type='submit'>Submit</button>
            </Form.Group>
            </Form>
        <div className="letterForm">
        {quotes.map((quote => {
            
            return  (
                <QuoteCard 
                key={quote._id}
                id={quote._id}
                name={quote.name}
                author={quote.author}
                quote={quote.quote}
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