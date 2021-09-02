import React, {useState, useEffect} from 'react'
import QuoteCard from '../components/QuoteCard'
import axios from 'axios'
const MyLog = () => {
    const [quotes, setQuotes] = useState([])
    
    const getQuotes = async () => {
        const res = await axios.get(
            `http://localhost:3001/api/quotes`
        )
        setQuotes(res.data.quotes)
        }

        useEffect(() => {
            getQuotes()
        }, [])
    
        return (
            
        <div>
            <h2>quotes</h2>
            {quotes.map(quote => 
                (
                <QuoteCard 
                key={quote._id}
                name={quote.name}
                author={quote.author}
                quote={quote.quote}
                />
                )
            )}
            
        </div>
    )}

    




export default MyLog