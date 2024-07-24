function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    if (todoInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span>${todoInput.value}</span>
        <button onclick="removeTodo(this)">Remove</button>
    `;

    todoList.appendChild(todoItem);
    todoInput.value = '';
}

function removeTodo(todoElement) {
    todoElement.parentElement.classList.add('fadeOut'); 
    setTimeout(() => {
        todoElement.parentElement.remove(); 
    }, 500);
}
