const heading = document.getElementById('hello')
//const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2-class')
//const heading2 = document.querySelector('.h2-class')
//const heading2 = document.querySelector('#sub-hello') //всегда 1 и 1-ый элемент
const heading2 = document.querySelector('h2')


//const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')

const heading3 = h2List[h2List.length - 1]


const link = heading3.querySelector('a')

link.addEventListener('click',(event) => {
    event.preventDefault()
    console.log('click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})

setTimeout(() => {
    addStylesTo(heading, 'JavaScrypt')
}, 1500)
setTimeout(() => {
    addStylesTo(heading2, 'Практикуйся', 'yellow', '3rem')
}, 4500)
setTimeout(() => {
    addStylesTo(link, 'И все получится!', 'blue', '2rem')
}, 3000)



function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.padding = '2rem'
    node.style.backgroundColor = 'aqua'
    node.style.textAlign = 'center'
    node.style.color = color
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize

    }
}

//https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'white'
        heading.style.backgroundColor = 'aqua'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'yellow'
    } 
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = 'white'
        heading2.style.backgroundColor = 'aqua'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = 'yellow'
    }
})
