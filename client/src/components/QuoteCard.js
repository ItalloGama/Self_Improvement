import React from 'react'
import axios from 'axios'
import { Card } from "react-bootstrap";
import BASE_URL from '../globle';
function QuoteCard(quotes) {
    
        const deleteQuote = () => {
            axios.delete(`${BASE_URL}/quotes/${quotes.id}`)
            window.location.reload()
    }
    return (
    <div className='cards'>
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{quotes.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{quotes.author}</Card.Subtitle>
                <Card.Text>{quotes.quote}</Card.Text>   
                <button onClick={deleteQuote}>delete</button>
            </Card.Body>
        </Card>
    </div>
    )
}
export default QuoteCard

