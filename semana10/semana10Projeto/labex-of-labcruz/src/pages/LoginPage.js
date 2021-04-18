import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



const LoginPage = () => {
    const history = useHistory()




    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = (event) => {

        event.preventDefault()
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/noelly-costa-cruz/login', body)
            .then((res) => {
                window.localStorage.setItem('token', res.data.token)
                history.push('/AdminPainel')
            })
            .catch((error) => {
                alert('Usuário não encontrado!')
            })
    }
    return (

        <div>

            <h1>Login</h1>
          <form onSubmit= {login}>
                <input
                    type='email'
                    value={email}
                    onChange={handleEmail}
                    placeholder={"your email"}
                />
                <input
                    type='password'
                    value={password}
                    onChange={handlePassword}
                    placeholder="password"
                     />

                <button onClick={login}>Login</button>
                </form>
        </div>

    )
}

export default LoginPage;