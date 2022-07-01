const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const button = document.querySelector('.button__btn')
const body = document.querySelector('body')
const html = document.querySelector('html')
const border = document.querySelector('.link__btn')

button.onclick = () => {
    if (button.style.backgroundColor === 'gray') {
        button.style.backgroundColor = '#222'
        footer.style.backgroundColor = '#222'
        header.style.backgroundColor = '#222'
        body.style.backgroundColor = '#333'
        body.style.color = '#fff'
        html.style.backgroundColor = '#333'
        html.style.color = '#fff'
        border.style.border.color = 'gray'
    } else {
        button.style.backgroundColor = 'gray'
        footer.style.backgroundColor = 'gray'
        header.style.backgroundColor = 'gray'
        body.style.backgroundColor = '#fff'
        body.style.color = '#333'
        html.style.backgroundColor = '#fff'
        html.style.color = '#333'
        border.style.border.color = '#333'
    } 
}
