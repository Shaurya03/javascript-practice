const todoList = [{
  name: 'go to gym',
  dueDate: '2025-12-12'
}, {
  name: 'sleep',
  dueDate: '2025-12-12'
}

];

renderTodoList();

function renderTodoList () {
  let todoListHTML = '';

  for (let i=0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;  //destucturing
    const html = `

    <div>${name}</div>
    <div>${dueDate}</div>
    <button class = "delete-button" onclick="
    todoList.splice(${i},1);
    renderTodoList()
    ">
    Delete
    </button>
    `; //generating html
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,              //shorthand property
    dueDate
   }
  );

  inputElement.value = '';  
  dateInputElement.value = '';

  renderTodoList();
}