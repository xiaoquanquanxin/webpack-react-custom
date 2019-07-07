import * as React from "react";
import {getToken} from '../tools/tools'
// @ts-ignore
import {Route, Switch, RouteProps, Redirect, Link} from "react-router-dom";
import Header from '@componentsHeader';

import HomePage from "@componentsHomePage";

const {lazy, Suspense} = React;

const Login = lazy(() =>
    import(/* webpackChunkName:"login" */"@componentsLogin"),
);
const ContentPage = lazy(() =>
    import(/* webpackChunkName:"contentpage" */"@componentsContentPage"),
);
const UserBehavior = lazy(() =>
    import(/* webpackChunkName:"contentpage" */"@componentsUserBehavior"),
);
const UserBehaviorABC = lazy(() =>
    // @ts-ignore
    import(/* webpackChunkName:"contentpage" */"@componentsUserBehavior/abc"),
);

const NotFound = lazy(() =>
    import(/* webpackChunkName:"contentpage" */"@componentsNotfound"),
);

const LoginSuccess = lazy(() =>
    import(/* webpackChunkName:"contentpage" */"@componentsLoginSuccess"),
);

export const routes: RouteProps[] = [
    {
        path: "/",
        exact: true,
        component: HomePage,
        auth: true
    }, {
        path: "/login",
        component: Login,
    }, {
        path: "/contentpage",
        component: ContentPage,
    }, {
        path: "/loginsuccess",
        component: LoginSuccess,
    }, {
        path: "/userBehavior",
        component: UserBehavior,
        children: [
            {
                parent: '/userBehavior',
                path: "/abc",
                component: UserBehaviorABC
            }
        ]
    }
];

const Routes = (token: string) => (
    <Suspense fallback={<span>loading..................</span>}>
        <Header/>
        <Switch>
            {routes.map((r, index) => {
                const {path, exact, component} = r;
                console.log(`getToken ${getToken()}`,`token ${token}`, `🦌`, `index ${index}`);
                const LazyCom = component;
                return (
                    <Route
                        key={`${path}`}
                        path={path}
                        exact={exact}
                        render={(props: object) =>
                            !r.auth ? (
                                <LazyCom {...props} />
                            ) : token ? (
                                <LazyCom {...props} />
                            ) : (
                                <Redirect
                                    to={{
                                        pathname: "/login",
                                        //  @ts-ignore
                                        state: {from: props.location}
                                    }}
                                />
                            )
                        }
                    />
                );
            })}
            <Route component={NotFound}/>
        </Switch>
    </Suspense>
);

export {Routes};
