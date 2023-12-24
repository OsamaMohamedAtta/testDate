const button = document.getElementById('test')
const input = document.getElementById('input')
const get = document.getElementById('get')

button.addEventListener('click', () => {
    localStorage.setItem('testDate', input.value )
})

get.addEventListener('click', () => {
    const cartona = localStorage.getItem('testDate')
    document.getElementById('cont').innerText = cartona
})