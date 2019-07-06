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
        // }, {
        //     path: '*',
        //     exact: true,
        //     component: ContentPage
    }
];

const Routes = () => (
    <Suspense fallback={<span>xxx</span>}>
        <Switch>
            {routes.map((r) => {
                const token = getToken();
                const {path, exact, component} = r;
                console.log(r.path);
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

//  获取token
function getToken() {
    const tokenArr = document.cookie.split("; ");
    for (let i = 0; i < tokenArr.length; i++) {
        const arr = tokenArr[i].split("=");
        if (arr[0] === "token") {
            return arr[1];
        }
    }
    return "";
}

export default Routes;
