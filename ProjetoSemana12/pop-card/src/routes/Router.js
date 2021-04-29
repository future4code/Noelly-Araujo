import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostListsPage from '../pages/PostListsPage/PostListsPage';
import PostPage from '../pages/PostPage/PostPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage/HomePage'



const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>

                <Route exact path='/cadastro'>
                    <SignUpPage />
                </Route>

                <Route exact path='/lista-de-posts'>
                    <PostListsPage />
                </Route>

                <Route exact path='/post/:id'>
                    <PostPage />
                </Route>

                <Route >
                    <ErrorPage />
                </Route>



            </Switch>


        </BrowserRouter>

    )
}


export default Router;