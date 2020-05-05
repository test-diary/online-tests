import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Login = lazy(() => import('./components/login/Login'));
const Questions = lazy(() => import('./components/onlineQuestions/Question'));
const Pageone = lazy(() => import('./components/login/Pageone'));
const Pagetwo = lazy(() => import('./components/login/Pagetwo'));
const PageNotFound = lazy(() => import('./components/login/PageNotFound'));

export default function PrivateRoute() {
    return (
        <Router>
                <Switch>
                    <Route exact path='/'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Login />
                        </Suspense>
                    </Route>
                    <Route exact path='/pageone'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Pageone />
                        </Suspense>
                    </Route>
                    <Route exact path='/pagetwo'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Pagetwo />
                        </Suspense>
                    </Route>
                    <Route exact path='/questions'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Questions />
                        </Suspense>
                    </Route>
                    <Route exact={true} path='*'>
                        <Suspense fallback={<div>Loading...</div>}>
                            <PageNotFound />
                        </Suspense>
                    </Route>
                    {/* <Route exact path='/pageone' component={Pageone} />
                    <Route exact path='/pagetwo' component={Pagetwo} />
                    <Route path="*" exact={true} component={PageNotFound} /> */}
                </Switch>
        </Router>

    );
}
