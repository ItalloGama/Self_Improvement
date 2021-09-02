import React, {useState, useEffect} from 'react'
import QuoteCard from '../components/QuoteCard'
import axios from 'axios'
const MyLog = () => {
    const [logs, setLogs] = useState([])
    
    const getLogs = async () => {
        const res = await axios.get(
            `http://localhost:3001/api/quotes`
        )
        setLogs(res.data.quotes)
        }

        useEffect(() => {
            getLogs()
        }, [])
    
        return (
        <div>
            <h2>quotes</h2>
            {logs.map((log) => {
                <QuoteCard 
                key={log._id}
                name={log.name}
                author={log.author}
                quote={log.quote}
                />
            })}
        </div>
    )}

    




export default MyLog