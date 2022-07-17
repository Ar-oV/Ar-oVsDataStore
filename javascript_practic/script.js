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
let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

let todoList = [];

if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
};

addButton.addEventListener('click', function(){
    if(!addMessage.value)return;
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false,
        done: false,
        id: `${Math.random()}`
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
            <div  class='todo__item "${item.important ? 'important' : ''}"' id='item_${i}'>
                <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
                <div class='delete__todo "${item.important ? 'important' : ''}"'>&times;</div>
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
/*let deleteTodo = document.querySelector('.delete__todo')
todo.addEventListener('click',(event) => {
    todoList.forEach(function(item, i){
        if(event.target === deleteTodo){
            todoList.splice(i, 1);
        }
    })
})*/