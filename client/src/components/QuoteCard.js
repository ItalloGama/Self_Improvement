import React from 'react'
import axios from 'axios'
import { Card } from "react-bootstrap";
function QuoteCard(quotes) {
        
        const deleteQuote = () => {
            axios.delete(`http://localhost:3001/api/quotes/${quotes.id}`)
            window.location.reload()
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{quotes.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{quotes.author}</Card.Subtitle>
                <Card.Text>{quotes.quote}</Card.Text>   
                <button onClick={deleteQuote}>delete</button>
            </Card.Body>
        </Card>
    )
}
export default QuoteCard