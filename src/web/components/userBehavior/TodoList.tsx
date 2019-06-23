import * as React from "react";

function TodoList({todos, toggleTodo}) {
    return (
        <ul className={'clear'}>
            {todos &&
            todos.map((item) => (
                <li
                    onClick={() => toggleTodo(item)}
                    style={{
                        margin: 10,
                        opacity: item.completed ? 0.5 : 1,
                        cursor: "pointer",
                        textDecoration: item.completed ? "line-through" : "none"
                    }}
                    key={item.id}>
                    {item.text}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
