import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer({ addTodo, toggleTodo }){
    const onCreate = useCallback(text => addTodo(text), [dispatch]);
    const onToggle = useCallback(id => toggleTodo(id), [dispatch]);
    
    return (
        <Todos 
            todos={todos}
            onCreate={onCreate}
            onToggle={onToggle}
        />
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = {
    addTodo,
    toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);