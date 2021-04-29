import React from 'react';
import Button from '@material-ui/core/Button'


const SignUpPage = () => {
    return (
        <div>
            <h1>Sign Up Page</h1>
            <input type='text' placeholder='name' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <Button variant="contained" color="primary" >
            SignUp
      </ Button>

        </div>

    )
}

export default SignUpPage;