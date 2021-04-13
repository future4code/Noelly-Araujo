import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminPainel, goToHome, goToLogin, goToSeeAllTrips, goToSingUp } from '../routes/coordinator';



const SeeAllTrips = () => {
    const history = useHistory();

    return (

        <>
            <p>Hi I'm See All Trips</p>
            <button onClick={() => goToSingUp(history)}>Sing Up</button>

        </>




    )
}

export default SeeAllTrips;