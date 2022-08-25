import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_STATE } from '../reducer/r_todo'


const TodoList = ({ state }) => {

    const dispatch = useDispatch();

    const onRemoveHandler = useCallback( ()=>{
        dispatch({
            type: REMOVE_STATE,
            id: state.id,
        });
    },[]);

  return (
      <div>
          {state.id}. {state.todo}
          <button onClick={onRemoveHandler}>완료</button>
      </div>
  );
};
export default TodoList;
