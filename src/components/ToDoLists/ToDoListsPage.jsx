import React from 'react';
import {useSelector} from 'react-redux';

function ToDoListsPage() {
    const trips = useSelector((store) => store.trips);
    
    return (
        <div className="todo-lists-container">
            <h2>To Do Lists:</h2>
        </div>
    );
}

// this allows us to use <App /> in index.js
export default ToDoListsPage;