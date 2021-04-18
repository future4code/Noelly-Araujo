import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SeeAllTrips from '../pages/SeeAllTrips';
import CreateTrip from '../pages/CreateTrip';
import AdminPainel from '../pages/AdminPainel';
import SignUp from '../pages/SignUp';
import LoginPage from '../pages/LoginPage';
import ShowDetails from '../pages/ShowDetails';


const Router = () => {
    return (
        <BrowserRouter>
            {/* <Header/>*/}

            <Switch>




                <Route exact path='/'>

                    <Home />

                </Route>
                <Route exact path='/SeeAllTrips'>
                    <SeeAllTrips />

                </Route>

                <Route exact path='/SignUp'>
                    <SignUp />
                </Route>

                <Route exact path='/LoginPage'>
                    <LoginPage />

                </Route>

                <Route exact path='/AdminPainel'>

                    <AdminPainel />

                </Route>
                <Route exact path='/CreateTrip'>
                    <CreateTrip />
                </Route>

                <Route exact path='/ShowDetails/'>

                    <ShowDetails />
                </Route>

            </Switch>

        </BrowserRouter>


    )
}
export default Router;