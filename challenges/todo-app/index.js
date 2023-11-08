let newTodoTextArea = document.querySelector('#newTodoTextArea')
newTodoTextArea.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        createNewTodo()
    }
});
// Prevent space at first char
newTodoTextArea.addEventListener('keydown', function (e) {
    if (this.value.length === 0 && e.which === 32) e.preventDefault();
  });

let todoList = document.querySelector('.todoList')

// Footer options
let clearBtn = document.querySelector('#clearBtn').addEventListener('click', deleteTodo)
// Filters
let filterAll = document.querySelector('#filterAll')
filterAll.addEventListener('click', showAll)
let filterActive = document.querySelector('#filterActive')
filterActive.addEventListener('click', showActive)
let filterCompleted = document.querySelector('#filterCompleted')
filterCompleted.addEventListener('click', showCompleted)

var showAllFilter = true
var showActiveFilter = false
var showCompletedFilter = false

let todoCount = localStorage.getItem('todoCount') ? JSON.parse(localStorage.getItem('todoCount')) :
  localStorage.setItem('todoCount', 0)

let todoArr = localStorage.getItem('todoArr') ? JSON.parse(localStorage.getItem('todoArr')) :
  []

document.onload = getTodos(todoArr), getItemsLeft()

function getTodos(todoArr){
    todoArr.forEach(el => {
        let li = document.createElement('li')

        let todoCheck = document.createElement('input')
            todoCheck.addEventListener('click', checked)
            todoCheck.setAttribute('type', 'checkbox')
            todoCheck.id = el.id
            el.checked === true ? todoCheck.checked = true : todoCheck.checked = false

        let todoText = document.createElement('p')
            todoText.classList.add('todoText')
            todoText.addEventListener('click', editTodo)
            todoText.innerText = el.text

        todoList.appendChild(li)
        li.appendChild(todoCheck)
        li.appendChild(todoText)
    })
}

function getItemsLeft(){
    let c = 0
    todoArr.forEach(el => {
        el.checked === false ? c++ : undefined
    })
    let itemsLeftText = document.querySelector('#itemsLeft')
    itemsLeftText.innerText = `${c} items left`
    updateList()
}

function checked(){
    const isChecked = this.checked;
    const itemId = this.id;

    todoArr.forEach(el => {
        if (el.id === itemId) {
        el.checked = isChecked;
        }
    });

    localStorage.setItem('todoArr', JSON.stringify(todoArr));
    getItemsLeft();
}

function createNewTodo(){
    if(newTodoTextArea.value != ''){
        let li = document.createElement('li')

        let todoCheck = document.createElement('input')
            todoCheck.addEventListener('click', checked)
            todoCheck.setAttribute('type', 'checkbox')
            todoCheck.id = parseInt(localStorage.getItem('todoCount'))

        let todoText = document.createElement('p')
            todoText.classList.add('todoText')
            todoText.addEventListener('click', editTodo)
            todoText.innerText = newTodoTextArea.value

        todoList.appendChild(li)
        li.appendChild(todoCheck)
        li.appendChild(todoText)

        var todoObj = {
            id: localStorage.getItem('todoCount'),
            text: newTodoTextArea.value,
            checked: false
        }
        todoArr.push(todoObj)
        localStorage.setItem('todoArr', JSON.stringify(todoArr))
        let c = parseInt(localStorage.getItem('todoCount'))
        localStorage.setItem('todoCount', ++c)

        newTodoTextArea.value = ''

        getItemsLeft()

        }else{
            alert('Write something!')
        }
}

function deleteTodo(){
    let todos = document.querySelectorAll('input:checked')
    todos.forEach(el => el.parentElement.remove())

    todoArr = todoArr.filter(el => !el.checked);
    const c = todoArr.length;

    localStorage.setItem('todoArr', JSON.stringify(todoArr));
    localStorage.setItem('todoCount', c);
    getItemsLeft();
}

function editTodo(){
    console.log(this)
}

function showAll(){
    showAllFilter = true
    showActiveFilter = false
    showCompletedFilter = false
    filterAll.style.color = '#4775D3'
    filterActive.style.color = 'gray'
    filterCompleted.style.color = 'gray'
    const todos = document.querySelectorAll('li')
    todos.forEach((el)=>{
        el.style.display = 'flex'
    })
}

function showActive(){
    showAllFilter = false
    showActiveFilter = true
    showCompletedFilter = false
    filterAll.style.color = 'gray'
    filterActive.style.color = '#4775D3'
    filterCompleted.style.color = 'gray'
    const todos = document.querySelectorAll('li')
    todos.forEach((el)=>{
        if(el.querySelector('input').checked == true){
            el.style.display = 'none'
        }else{
            el.style.display = 'flex'
        }
    })
}

function showCompleted(){
    showAllFilter = false
    showActiveFilter = false
    showCompletedFilter = true
    filterAll.style.color = 'gray'
    filterActive.style.color = 'gray'
    filterCompleted.style.color = '#4775D3'
    const todos = document.querySelectorAll('li')
    todos.forEach((el)=>{
        if(el.querySelector('input').checked == false){
            el.style.display = 'none'
        }else{
            el.style.display = 'flex'
        }
    })
}

function updateList(){
    if(showAllFilter == true){
        showAll()
    }else if(showActiveFilter == true){
        showActive()
    }else if(showCompletedFilter == true){
        showCompleted()
    }
}