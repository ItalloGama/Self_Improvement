import React from 'react'
import axios from 'axios'

function QuoteCard(quotes) {
        
        const deleteQuote = () => {
            axios.delete(`http://localhost:3001/api/quotes/${quotes.id}`)
            window.location.reload()
    }
    return (
        <div className="Quote-card">
            <div>
                <h3>{quotes.name}</h3>
                <h3>{quotes.author}</h3>
                <p>{quotes.quote}</p>    
                <button onClick={deleteQuote}>delete</button>
            </div>
        </div>
    )
}
export default QuoteCard