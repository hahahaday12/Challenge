//import { useState, useCallback } from "react";
import TodoList from "../components/r_todoList";
import TodoTitle from "../components/r_todoTitle";
import TodoForm from "../components/r_todoForm";
import { useSelector } from 'react-redux';


const Todo = () => {

    // 지움
    /*const [state, setState] = useState([
        {
            id: 1,
            Todo: "리액트 공부하기",
        },
        {
            id: 2,
            Todo: "리액트 또 공부하기",
        },
    ]);

    const onAddHandler = useCallback(
        (id, todo) => {
            setState([...state, { id: id, Todo: todo }]);
        },
        [state]
    );

    const onRemoveHandler = useCallback(
        (id) => {
            const removeState = state.filter((item) => item.id !== id);
            setState(removeState);
        },
        [state]
    );
    */

    const state = useSelector( (state) => state.todo);
  
    return (
        <>
            <TodoTitle state={state} />
            <TodoForm
                //onAddHandler={onAddHandler}
                //id={state.length > 0 && state[state.length - 1].id}
            />
            {state.map((v) => (
                <TodoList
                    key={v.id}
                    //onRemoveHandler={onRemoveHandler}
                    state={v}
                />
            ))}
        </>
    );
};
export default Todo;