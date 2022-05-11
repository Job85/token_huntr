import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    let navigate = useNavigate()

    return (
        <div>
            <section>
                <h1>Welcome to Token Huntr</h1>
                <h2>Log In or Sign Up for New Adventures</h2>
                <button onClick={() => navigate('/auth/signin')}>
                    Log In Here
                </button>
                <button onClick={() => navigate('/auth/register')}>
                    Sign Up Here
                </button>
            </section>
        </div>
    )
}

export default Landing