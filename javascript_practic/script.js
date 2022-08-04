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
const cellColor = document.querySelector('.todo__container')

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
        cellColor.style.backgroundColor = '#1f1f1f'

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
        cellColor.style.backgroundColor = 'gray'
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
if(localStorage.getItem('tasks')){
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => renderTask(task));
}

checkEmptyList();

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
    if(tasks.length < 7){
        tasks.push(newTask);
        saveToLocalStorage();
        renderTask(newTask);
    };

    addMessage.value = ""
    addMessage.focus ()
    //if(todo.children.length > 1) {
    //    emptyList.classList.add('none');
    //}
    checkEmptyList();
}

function deleteTodo(event) {
    if(event.target.dataset.action !== 'delete') return;
    
    const parenNode = event.target.closest('li');
    const id = Number(parenNode.id);
    //нахождение индекса задачи в массиве
    //const index = tasks.findIndex((task) => task.id === id);
    //удаление задачи из масива с задачами
    //tasks.splice(index, 1)
    //удаление через фильтрацию
    tasks = tasks.filter((task) => task.id !== id);
    saveToLocalStorage();
    parenNode.remove();

    if(todo.children.length === 1) {
        emptyList.classList.remove('none');
    }
    checkEmptyList();
}
function doneTodo(event){
    if(event.target.dataset.action !== 'done') return;
    const parentNode = event.target.closest('.list-group-item');
    const id = Number(parentNode.id);
    const task = tasks.find( (task) => task.id === id);
    
    
    task.done = !task.done;
    saveToLocalStorage();

    const taskTitle= parentNode.querySelector('label');
    taskTitle.classList.toggle('label__text_done');
}
function checkEmptyList(){
    if(tasks.length === 0){
        const emptyListHTML = `
        <div class="empty__list">
            <p>empty</p>
        </div>`
        todo.insertAdjacentHTML('afterbegin', emptyListHTML);
    }

    if(tasks.length > 0) {
        const emptyListEl = document.querySelector('.empty__list');
        emptyListEl ? emptyListEl.remove() : null;
    }
}
function saveToLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
function renderTask(task) {
    const cssClass = task.done ? 'label__text label__text_done' : 'label__text';
    const taskHTML = `
    <li id='${task.id}' class='list-group-item' draggable='true'>
        <div class='todo__item'>
            <label class='${cssClass}' data-action='done'>${task.text}</label>
            <div class='delete__todo' data-action='delete'>&times;</div>
        </div>
    </li>
    `;
    todo.insertAdjacentHTML('beforeend',taskHTML);
}


const dragCard = document.querySelectorAll('.list-group-item');
const allCells = document.querySelectorAll('.todo__cell');
let draggableTodo = null;

dragCard.forEach((dragTodo) => {
    dragTodo.addEventListener('dragstart', dragStart);
    dragTodo.addEventListener('dragend', dragEnd);

});
function dragStart(){
    draggableTodo = this;
    console.log('dragstart');
};
function dragEnd(){
    draggableTodo = null;
    console.log('dragend');
};
allCells.forEach((cell) => {
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragleave', dragLeave);
    cell.addEventListener('drop', dragDrop);
    
});
function dragOver(e){
    e.preventDefault();
    //console.log('dragover');
};
function dragEnter(){
    this.style.border = '1 px dashed #ccc';
    console.log('dragenter');
};
function dragLeave(){
    this.style.border = 'none'
    console.log('dragleave');
};
function dragDrop(){
    this.style.border = 'none'
    this.appendChild(draggableTodo);
    console.log('dragdrop');
};