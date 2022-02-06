const body = document.querySelector('body')
const redContent = document.createElement('p')

redContent.textContent = "Hey I'm red!"
redContent.style.color = 'red'

body.appendChild(redContent)

const blueContent = document.createElement('h3')
blueContent.textContent = "I'm a blue h3!"
blueContent.style.color = 'blue'

body.appendChild(blueContent)

const container = document.createElement('div')
const h1 = document.createElement('h1')
const p = document.createElement('p')

container.appendChild(h1)
container.appendChild(p)

container.style.cssText = 'border: 1px solid black; background-color: pink'
h1.textContent = "I'm in a div"
p.textContent = "ME TOO!"

body.appendChild(container)

const btn = document.querySelector('#btn')
btn.addEventListener('click', function(e) {
    alert('i click you!')
})

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id)
    })
})