import {createContext} from "react";
import {decorate, observable, computed} from "mobx";

export class Todos {
    todos = [
        {id: 1, text: "behavior 1 ", completed: false},
        {id: 2, text: "behavior 2 ", completed: false}
    ];

    get activeTodos() {
        return this.todos.filter(t => !t.completed).length;
    }

    toggleTodo = (item:any) => {
        item.completed = !item.completed;
    };
}

decorate(Todos, {
    //  @ts-ignore
    todos: observable,
    id: observable,
    activeTodos: computed,
});

export default createContext(new Todos());
