import React from 'react'

function QuoteCard(props) {
    const { city } = props
    return (
        <div className="Quote-card" onClick={() => props.showCity(city)}>
            <img style={{ display: 'block' }} src={city.image} alt={city.name} />
            <h3>{city.name}</h3>
        </div>
    )
}

export default QuoteCard