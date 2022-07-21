const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const button = document.querySelector('.button__btn')
const body = document.querySelector('body')
const html = document.querySelector('html')
const border1 = document.querySelector('.link__btn_1')
const border2 = document.querySelector('.link__btn_2')
const border3 = document.querySelector('.link__btn_3')
const border4 = document.querySelector('.link__btn_4')
const border5 = document.querySelector('.link__btn_5')
const btn = document.querySelector('.button__switch')
const calc = document.querySelector('.calculate__container')
const ravno = document.querySelector('.item__19')

button.onclick = () => {
    if (button.style.backgroundColor === 'gray') {
        button.style.backgroundColor = '#222'
        footer.style.backgroundColor = '#222'
        header.style.backgroundColor = '#222'
        body.style.backgroundColor = '#333'
        body.style.color = '#fff'
        html.style.backgroundColor = '#333'
        html.style.color = '#fff'
        border1.style.borderColor = 'gray'
        border2.style.borderColor = 'gray'
        border3.style.borderColor = 'gray'
        border4.style.borderColor = 'gray'
        border5.style.borderColor = 'gray'
        btn.style.backgroundColor = '#fff'
        btn.style.top = '-68px'
        calc.style.backgroundColor = '#222'
        ravno.style.backgroundColor = '#333'

    } else {
        button.style.backgroundColor = 'gray'
        footer.style.backgroundColor = 'gray'
        header.style.backgroundColor = 'gray'
        body.style.backgroundColor = '#fff'
        body.style.color = '#333'
        html.style.backgroundColor = '#fff'
        html.style.color = '#333'
        border1.style.borderColor = '#333'
        border2.style.borderColor = '#333'
        border3.style.borderColor = '#333'
        border4.style.borderColor = '#333'
        border5.style.borderColor = '#333'
        btn.style.backgroundColor = '#333'
        btn.style.top = '-38px'
        calc.style.backgroundColor = 'gray'
        ravno.style.backgroundColor = '#555'
    } 
}


function insert(num) {
    document.form.textview.value =
    document.form.textview.value + num;
}
function clean() {
    document.form.textview.value = "";
}
function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}
function equal() {
    var exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }
}

let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopup = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
openPopup.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    };
});
const addMessage = document.querySelector('.message');
const addButton = document.querySelector('.add');
const todo = document.querySelector('.todo');
const emptyList = document.querySelector('.empty__list')

let tasks = [];

addButton.addEventListener('click', addTask);
todo.addEventListener('click', deleteTodo);
todo.addEventListener('click', doneTodo);

function addTask (event){
    event.preventDefault();
    const addText = addMessage.value;
    const newTask = {
        id: Date.now(),
        text: addText,
        done: false
    };
    tasks.push(newTask);
    console.log(tasks);
    const cssClass = newTask.done ? 'label__text label__text_done' : 'label__text';
    const taskHTML = `
    <li id='${newTask.id}'>
        <div class='todo__item'>
            <div class='delete__todo' data-action='delete'>&times;</div>
            <label class='${cssClass}' data-action='done'>${addText}</label>
        </div>
    </li>
    `;
    todo.insertAdjacentHTML('beforeend',taskHTML);
    addMessage.value = ""
    addMessage.focus ()
    if(todo.children.length > 1) {
        emptyList.classList.add('none');
    }
}

function deleteTodo(event) {
    if(event.target.dataset.action !== 'delete') return;
    
    const parenNode = event.target.closest('li');
    const id = Number(parenNode.id);
    const index = tasks.findIndex( (task) => task.id === id);
    tasks.splice(index, 1)
    parenNode.remove();

    if(todo.children.length === 1) {
        emptyList.classList.remove('none');
    }

}
function doneTodo(event){
    if(event.target.dataset.action !== 'done') return;
    const parentNode = event.target.closest('.todo__item');
    const taskTitle= parentNode.querySelector('label');
    taskTitle.classList.toggle('label__text_done');
}
/*if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
};

addButton.addEventListener('click', function(){
    if(!addMessage.value)return;
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false,
        id: Date.now(),
        text: taskText,
        done: false
    };
    todoList.push (newTodo);
    displayMessages();
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessage.value = '';
});

function displayMessages(){
    let displayMessages = '';
    if(todoList.length === 0) todo.innerHTML = '';
    todoList.forEach(function(item, i){
        displayMessages += `
        <li>
            <div id='${newTodo.id}' class='todo__item "${item.important ? 'important' : ''}"' id='item_${i}'>
                <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
                <div data-action='delete' class='delete__todo "${item.important ? 'important' : ''}"'>&times;</div>
                <label for='item_${i}'>${item.todo}</label>
            </div>
        </li>
        `;
        todo.innerHTML = displayMessages;
    });
};
todo.addEventListener('change', function(event){
    let idInput = event.target.getAttribute('id');
    let forLabel = todo.querySelector('[for=' + idInput + ']');
    let valueLabel = forLabel.innerHTML;
    todoList.forEach(function(item){
        if(item.todo === valueLabel){
            item.checked = !item.checked;
            localStorage.setItem('todo',JSON.stringify(todoList));
        };
    });
});
todo.addEventListener('contextmenu',function(event){
    event.preventDefault();
    todoList.forEach(function(item, i){
        if(item.todo === event.target.innerHTML){
            if(event.ctrlKey){
                todoList.splice(i, 1);
            }
            else {
                item.important = !item.important;
            }
            displayMessages();
            localStorage.setItem('todo',JSON.stringify(todoList));
        };
    });
});
*/