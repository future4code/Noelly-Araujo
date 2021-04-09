import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { baseUrl } from '../Parameters';





function User() {
    const [user, setUser] = useState()

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
            <h2>astromach</h2> <button>click</button>

            {user && < >
                <CardUser>
                    <CardImage>
                        <img src={user.photo} />
                    </CardImage>


                    <CardName>

                        {user.name}, {user.age}
                    </CardName>
                    
                    <CardDescription>
                        {user.bio}
                    </CardDescription>


                </CardUser>



                <button>X</button> <button>Ok</button>
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



