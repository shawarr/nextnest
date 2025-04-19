'use client'

import {useState} from 'react'

export default function ContactPage() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if(!name || !message) {
            alert("Enter your name and message")
        }

        else{
        const res = await fetch(`api/contact`, {
        method: 'POST',
        body: JSON.stringify({name, message}),
        headers: {'Content-Type' : 'application/json'}
    
    })

    const result = await res.json();
    console.log(result)
        alert(`Thanks ${name}! Your message "${message} has been recieved" ${result}`)
        setName('')
        setMessage('')
        }
    }
    return(
        <div className="max-w-md mx-auto space-y-4c content-center">
            <h1 className="text-4xl font-bold text-blue-400 space-y-4 m-10 text-center">Contact Us</h1>
            <form onSubmit={handleSubmit} className='space-y-3 content-center'>
            <input
             className="border rounded-b-md w-full p-3"
             type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name"/>
            <textarea
             className="w-full border rounded-b-md p-3"
             value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Message"/>
            <div className="flex justify-center">
                <button type="submit" className="bg-green-600 text-white p-2 rounded-md">Submit</button>
            </div>
            </form>
        </div>
    )
}