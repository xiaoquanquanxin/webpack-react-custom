import * as React from "react";
// @ts-ignore
import {Route, Switch, RouteProps, Redirect, Link} from "react-router-dom";

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

export const routes: RouteProps[] = [
    {
        path: "/",
        exact: true,
        component: HomePage,
        auth: true
        // children: [
        //   {
        //     path: "/aa",
        //     component: Demo
        //   }
        // ]
    }, {
        path: "/",
        exact: true,
        component: HomePage,
    }, {
        path: "/login",
        exact: true,
        component: Login,
    }, {
        path: "/contentpage",
        exact: true,
        component: ContentPage,
    }, {
        path: "/userBehavior",
        exact: true,
        component: UserBehavior,
        children: [
            {
                parent: '/userBehavior',
                path: '/abc',
                exact: true,
                component: UserBehaviorABC
            }
        ]
    },
];

const Routes = () => (
    <Suspense fallback={<span>xxx</span>}>
        <Switch>
            {routes.map((r) => {
                // console.log(r);
                const token = "";
                const {path, exact, component} = r;
                console.log(r);
                console.log(!r.auth);
                const LazyCom = component;
                return (
                    <Route
                        key={`${path}`}
                        path={path}
                        exact={exact}
                        render={(props:object) =>
                            !r.auth ? (
                                <LazyCom {...props} />
                            ) : token ? (
                                <LazyCom {...props} />
                            ) : (
                                <Redirect
                                    to={{
                                        pathname: "/login",
                                        //  @ts-ignore
                                        state: { from: props.location }
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

export default Routes;
