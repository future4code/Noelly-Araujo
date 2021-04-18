import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToLoginPage, goToSeeAllTrips } from '../routes/coordinator';


const Home = () => {
    const history = useHistory();
    return (
        <>

            <p>Home Page</p>

            <button onClick={() => goToSeeAllTrips(history)}>See All Trips</button>
            <button onClick={() => goToLoginPage(history)}>Admin Area</button>



        </>



    )
}

export default Home;