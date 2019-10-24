import React from 'react';

function onClickHandler(props) {
    //console.log ("this is props function", props.todos)
    return (
        <div>
            <h1>To Do List</h1>
                <ul>
                    {props.todos.map((todo, index) => {
                   return <li key={index}> {props.todos[index]}
                    </li>
                })}
                </ul>
        </div>
    )
}

export default onClickHandler;