import React, { useState } from 'react';


/*
    React는 먼저 컴퍼넌트를 렌더링(rendering) 한 뒤, 
    이전 렌더된 결과와 비교하여 DOM 업데이트를 결정한다. 
    만약 렌더 결과가 이전과 다르다면, React는 DOM을 업데이트한다.

    다음 렌더링 결과와 이전 결과의 비교는 빠르다. 
    하지만 어떤 상황에서는 이 과정의 속도를 좀 더 높일 수 있다.

    컴퍼넌트가 React.memo()로 래핑 될 때, 
    React는 컴퍼넌트를 렌더링하고 결과를 메모이징(Memoizing)한다. 
    그리고 다음 렌더링이 일어날 때 props가 같다면, 
    React는 메모이징(Memoizing)된 내용을 재사용한다.

    * 언제 React.memo()를 써야 할까
    > 같은 props로 렌더링이 자주 일어나는 컴포넌트

    * 언제 React.memo()를 쓰지 말아야 할까
    > 렌더링될 때 props가 다른 경우가 대부분인 컴포넌트
*/
const TodoItem = React.memo(function TodoItem({ todo, onToggle }){
    return (
        <li
            style={{
                textDecoration: todo.done ? 'line-through' : 'none'
            }}
            onClick={() => onToggle(todo.id)}
        >

            {todo.text}

        </li>
    )
});

const TodoList = React.memo(function TodoList({ todos, onToggle }){
    return (
        <ul>
            {
                todos.map(todo => <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                />)
            }
        </ul>
    )
});

function Todos({ todos, onCreate, onToggle }){
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={onChange} placeholder="할 일을 입력하세요..." />
                <button type="submit">등록</button>
            </form>
            <TodoList 
                todos={todos}
                onToggle={onToggle}
            />
        </div>
    )
}

export default React.memo(Todos);