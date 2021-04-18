import {useLayoutEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {gToLoginPage} from '../routes/coordinator';

const useProtectedPage = () => {
const history= useHistory()

useLayoutEffect(() =>{
    const token = localStorage.getItem('token')
    if(!token){
        gToLoginPage(history)
    }

},[history])

}


export default useProtectedPage;