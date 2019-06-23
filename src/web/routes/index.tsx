import * as React from "react";
import {Route, Switch, RouteProps} from "react-router-dom";
import HomePage from "@componentsHomePage";

const {lazy, Suspense} = React;

const Login = lazy(() =>
    import(/* webpackChunkName:"login" */"@componentsLogin"),
);
const ContentPage = lazy(() =>
    import(/* webpackChunkName:"contentpage" */"@componentsContentPage"),
);

export const routes: RouteProps[] = [
    {
        path: "/",
        exact: true,
        component: HomePage,
    },
    {
        path: "/login",
        exact: true,
        component: Login,
    },
    {
        path: "/contentpage",
        exact: true,
        component: ContentPage,
    },
];

const Routes = () => (
    <Suspense fallback={<span>xxx</span>}>
        <Switch>
            {routes.map((r) => {
                console.log(r);
                const {path, exact, component} = r;
                const LazyCom = component;
                return (
                    <Route
                        key={`${path}`}
                        exact={exact}
                        path={path}
                        render={() => <LazyCom/>}
                    />

                );
            })}
        </Switch>
    </Suspense>
);

export default Routes;
