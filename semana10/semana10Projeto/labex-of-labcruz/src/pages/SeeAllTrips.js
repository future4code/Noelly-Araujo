import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToSignUp } from '../routes/coordinator';



const SeeAllTrips = () => {
    const history = useHistory();

    return (

        <div>
            <p>Hi I'm See All Trips</p>
            <button>Go Back</button>
            <button onClick={() => goToSignUp(history)}>SignUp</button>
          

        </div>




    )
}

export default SeeAllTrips;