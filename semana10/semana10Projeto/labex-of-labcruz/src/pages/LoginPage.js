import React from 'react';
import useForm from '../hooks/useForm';
import { login } from '../services/requests';
import { useHistory } from 'react-router-dom';
import useUnprotectedPage from '../hooks/useUnprotectedPage';
import { goToAdminPainel, goToHome } from '../routes/coordinator';



const LoginPage = () => {
    useUnprotectedPage()
    const history = useHistory()
   const { form, onChange } = useForm({ email: '', password: '' })
    
//
//    const [email, setEmail] = useState('')
//    const [password, setPassword] = useState('')
//    const handleEmail = (event) => {
//        setEmail(event.target.value)
//    }
//
//    const handlePassword = (event) => {
//        setPassword(event.target.value)
//    
//    

//
    const onClickLogin = (event) => {
        event.preventDefault()
        login(form, history)
    }
    return (

        <div>

            <h1>Login</h1>
            <form onSubmit={onClickLogin}>
                <input
                    type={'email'}
                    name={'email'}
                    value={form.email}
                    placeholder={'Your email'}
                    onChange={onChange}
                    required
                />
                <input
                    type={'password'}
                    name={'password'}
                    value={form.password}
                    placeholder={'password'}
                    onChange={onChange}
                    required
                />
                <button onClick={() => goToHome(history)}>Go Back</button>
                <button onClick={() => goToAdminPainel(history)}/*type={'submit'}*/>Login</button>
            </form>
        </div>

    )
}

export default LoginPage

