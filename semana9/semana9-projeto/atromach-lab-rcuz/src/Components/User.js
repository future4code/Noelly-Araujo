import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { baseUrl } from '../Parameters';
import Mach from './Mach';

import { checkPropTypes } from 'prop-types';






function User(props) {
    const [user, setUser] = useState()




    const choicePerson = (id, choice) => {
        const body = {
            id: id,
            choice: choice,
        }
        axios.post(baseUrl + `/choose-person`, body)
            .then((answer) => {
                getUser()
            })
            .catch((error) => {
                alert('nçao deu mach')
            })
    }
    const getUser = () => {
        axios.get(baseUrl + `/person`)
            .then((answer) => {
                console.log(answer.data.profile)
                setUser(answer.data.profile)
            })
            .catch((error) => {
                alert('deu ruim')
            })

    }

    useEffect(() => {
        getUser()
    }, [])


    return (
        <div>
            <CardHeader>
               <h2>astromach <button >aaa</button></h2>
            </CardHeader>





            {user && < >
                <CardUser>
                    <CardImage>
                        <img src={user.photo} />
                    </CardImage>


                    <CardName>

                        {user.name}, {user.age}
                    </CardName>

                    <CardDescription>
                        <p>{user.bio}</p>
                    </CardDescription>

                </CardUser>


                <ButtonsChoice>
                    <button onClick={() => choicePerson(user.id, false)} >X</button> <button onClick={() => choicePerson(user.id, true)} >Ok</button>
                </ButtonsChoice>
            </>
            }

        </div>


    )

}


export default User;

const CardUser = styled.div`
border-radius: 6px;
display: flex;
flex-direction: column;
margin-left: 5px;
img{
    width: 100%;
    height: 30vh;
}
`
const CardName = styled.div`

`
const CardImage = styled.div`
width: 90%;
height: 40%;
align-self: center;

img{
   
    max-width: 100%;
    max-height: 100%;
}
`
const CardDescription = styled.div`

`

const ButtonsChoice = styled.div`
button{
    margin-left: 25px;
}
`
const CardHeader = styled.div`
margin-left: 85px;
`



