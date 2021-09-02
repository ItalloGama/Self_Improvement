import axios from "axios";
import React, { useState } from 'react'


const Home = () => {
    const [newQuote, setNewQuote] = useState({
        name:'',
        author:'',
        quote:''
    })
    const handleChange = (e) => {
        e.preventDefault()
        setNewQuote({ ...newQuote, [e.target.name]: e.target.value })
    }

    const addNewQuote = async (formdata) => {
        try {
        const res = await axios.post(
            process.env.NODE_ENV === 'production'
                ? `${window.location.origin}/api/goals`
                : 'http://localhost:3001/api/goals',
            formdata
        )
        return res.data
        } catch (error) {
            console.log(error)
        }
    }

const handleImput = (e) => {
    e.preventDefault()
    addNewQuote(newQuote)
    document.getElementById('post-ref').reset()
}

return (
    <div> 
        <div>quote list</div>
        <div>
            <form onSubmit={handleImput} id='post'>
            <input
            name="Name"
            onChange={(e) => {
            handleChange(e)
            }}/>
            <input
            name="Author"
            onChange={(e) => {
            handleChange(e)
            }}/>
            <input
            name="Quote"
            onChange={(e) => {
            handleChange(e)
            }}/>
            <button type='submit'>Submit</button>
            </form>
        </div>
    </div>


)
}
export default Home