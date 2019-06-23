import * as React from "react";
const {useContext, Suspense} = React;
import {observer} from "mobx-react-lite";
import TodoStore from "./store";
import TodoList from "./TodoList";
import Footer from "./footer";

const HomePage = observer(() => {
    const store = useContext(TodoStore);
    return (
        <><h3> user behavior </h3>
        <div>
            <TodoList todos={store.todos} toggleTodo={store.toggleTodo}/>
            <Footer remaining={store.remainingTodos} total={store.todos.length}/>
        </div>
        </>
    );
});

export default HomePage;
