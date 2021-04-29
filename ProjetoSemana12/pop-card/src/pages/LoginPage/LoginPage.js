import React from 'react';
import Button from '@material-ui/core/Button'
import {goToPostListsPage} from '../../routes/coordinator'
import {useHistory} from 'react-router-dom';


const LoginPage = () => {
    const history = useHistory()
    
    return (
        <div>
            <h1>Login Page</h1>

            <input type='email' placeholder=' email' />
            <input type='password' placeholder='password' />

           
            <Button  onClick={() => goToPostListsPage(history)}variant="contained" color="primary" >
                LogIn
      </ Button>
            <  Button variant="contained" color="secondary" >
                SignUp
      </Button>

        </div>

    )
}

export default LoginPage;

