import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToAdminPainel, goToHome, goToLogin, goToSeeAllTrips } from '../routes/coordinator';

const Home = () => {
    const history = useHistory();
    return (
        <>

            <p>Home Page</p>

            <button onClick={() => goToSeeAllTrips(history)}>See All Trips</button>
            <button onClick={() => goToAdminPainel(history)}>Admin Area</button>



        </>



    )
}

export default Home;