import React from "react";

function Todo({todos, addTodo}) {
    console.log('renders')
    return (
        <>
            <div>
                {todos.map( (item, index) => {
                    return <p key={index}>{item}</p>  
                })}
            </div>
        </>
    );
};

export default Todo;