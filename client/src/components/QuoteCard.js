import React from 'react'
import axios from 'axios'
import { Card } from "react-bootstrap";
function QuoteCard(quotes) {
    
        const deleteQuote = () => {
            axios.delete(`${BASE_URL}/api/quotes/${quotes.id}`)
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

// heroku config:set MONGODB_URI=mongodb+srv://itallo4:itallo1994@cluster0.gqkt0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority