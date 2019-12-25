import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

/*
    useCallback => 랜더링 할 때 마다 매번 새로 만드는게 아니라 재사용하고 싶을 때
*/
function TodosContainer(){
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = useCallback(text => dispatch(addTodo(text)), [dispatch]);
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);
    
    return (
        <Todos 
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
        />
    )
}

export default TodosContainer;