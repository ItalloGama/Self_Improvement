import React from 'react'

function QuoteCard(props) {
    
    return (
        <div className="Quote-card">
            <div>
                <h3>{props.name}</h3>
                <h3>{props.author}</h3>
                <p>{props.quote}</p>
            </div>
        </div>
    )
}

export default QuoteCard