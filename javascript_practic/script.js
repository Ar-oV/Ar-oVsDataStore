const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const button = document.querySelector('.button__btn')
const body = document.querySelector('body')
const html = document.querySelector('html')
const border1 = document.querySelector('.link__btn_1')
const border2 = document.querySelector('.link__btn_2')
const border3 = document.querySelector('.link__btn_3')
const border4 = document.querySelector('.link__btn_4')
const btn = document.querySelector('.button__switch')

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
        btn.style.backgroundColor = '#fff'
        btn.style.top = '-68px'

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
        btn.style.backgroundColor = '#333'
        btn.style.top = '-38px'
    } 
}
