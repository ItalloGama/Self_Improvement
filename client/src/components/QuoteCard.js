import React from 'react'

function QuoteCard(props) {
    const { quote } = props
    return (
        <div className="Quote-card" onClick={() => props.showQuote(city)}>
            <div>
                <h3>{quote.name}</h3>
                <h3>{quote.author}</h3>
                <p>{quote.quote}</p>
            </div>
        </div>
    )
}

export default QuoteCard