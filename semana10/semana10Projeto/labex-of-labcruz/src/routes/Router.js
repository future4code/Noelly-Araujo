import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SeeAllTrips from '../pages/SeeAllTrips';
import ShowDetails from '../pages/ShowDetails';
import CreateTrip from '../pages/CreateTrip';
import AdminPainel from '../pages/AdminPainel';
import SingUp from '../pages/SingUp';


const Router = () => {
    return (
        <BrowserRouter>
            {/* <Header/>*/}

            <Switch>




                <Route exact path='/'>

                    <Home />

                </Route>
                <Route exact path='SeeAllTrips'>
                    <SeeAllTrips />

                </Route>

                <Route exact path='Sing Up'>
                    <SingUp />
                </Route>

                <Route exact path='Login'>
                    <Login />

                </Route>

                <Route exact path='AdminPainel'>

                    <AdminPainel />

                </Route>
                <Route exact path='CreateTrip'>
                    <CreateTrip />
                </Route>

                <Route exact path='ShowDetails'>

                    <ShowDetails />
                </Route>

            </Switch>

        </BrowserRouter>


    )
}
export default Router;