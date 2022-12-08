const toggles = document.querySelectorAll('.faq-toggle')


toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})


const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
})

const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 300

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter,1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})


const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY
console.log(x, y)
        const buttonTop = e.target.offsetTop 
        const buttonLeft = e.target.offsetLeft
console.log(buttonTop,buttonLeft)
        const xInside = x - buttonLeft
        const yInside = y - buttonTop + 5
console.log(xInside,yInside)
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)
    })
})