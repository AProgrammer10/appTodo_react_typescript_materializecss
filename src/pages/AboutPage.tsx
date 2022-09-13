import React from 'react'
import {useNavigate} from 'react-router-dom'

export const AboutPage: React.FC= () => {

    const navigate = useNavigate()
    
    return (
        <>
            <h1 className="center teal-text">TO-DO LIST:</h1>
            <h4 className="center teal-text">React-18.2.0 & Typescript-4.8.3 & React-router-dom-6.3.0</h4>
            <button className="btn" onClick={() => navigate('/')}>Back to the tasks</button>
        </>
    )     
    
} 