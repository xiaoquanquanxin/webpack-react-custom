import * as React from "react";
import {BrowserRouter, Switch, Route, RouteProps} from "react-router-dom";
import {observer} from "mobx-react-lite";
import TodoStore from "./store";
import TodoList from "./TodoList";
import Footer from "./footer";
import Header from '@componentsHeader';

const {useContext, Suspense, Component, lazy} = React;


const UserBehaviorABC = lazy(() =>
    import(/* webpackChunkName:"contentpage" */"@componentsUserBehavior/abc"),
);
console.log(UserBehaviorABC);
export const routes: RouteProps[] = [
    {
        path: '/abc',
        exact: true,
        component: UserBehaviorABC
    }
];

//  二级路由
import SubRoute from './subRoute';

const Routes = () => (
    <Suspense fallback={<span>xxx</span>}>
        <Switch>
            {routes.map((r) => {
                console.log(r);
                const {path, exact, component, children} = r;
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

const UserBehavior = observer(() => {
    const store = useContext(TodoStore);
    return (
        <>
            <Header/>
            <h3> user behavior </h3>
        <div>
            <TodoList todos={store.todos} toggleTodo={store.toggleTodo}/>
            <Footer active={store.activeTodos} total={store.todos.length}/>
        </div>
        <br/>
        <div>
            <SubRoute rootRoute={'userBehavior'}/>
        </div>
        <BrowserRouter basename="/userBehavior">{Routes()}</BrowserRouter>
        </>
    );
});
export default UserBehavior;
