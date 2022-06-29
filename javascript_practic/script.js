const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const button = document.querySelector('.button__btn')
const body = document.querySelector('body')
const html = document.querySelector('html')

button.onclick = () => {
    if (button.style.backgroundColor === 'gray') {
        button.style.backgroundColor = '#222'
        footer.style.backgroundColor = '#222'
        header.style.backgroundColor = '#222'
        body.style.backgroundColor = '#333'
        html.style.backgroundColor = '#333'
    } else {
        button.style.backgroundColor = 'gray'
        footer.style.backgroundColor = 'gray'
        header.style.backgroundColor = 'gray'
        body.style.backgroundColor = '#fff'
        html.style.backgroundColor = '#fff'
    } 
}
