const input = document.querySelector('.input')
const ol = document.querySelector('.ol')
const addBtn = document.createElement('button')
addBtn.classList.add('addBtn')
addBtn.innerHTML = 'Выполненно'
const removeBtn = document.createElement('button')
removeBtn.classList.add('removeBtn')
removeBtn.innerHTML = 'Удалить'



input.addEventListener('keypress', function(event){
    const li = document.createElement('li')
    if(event.code == 'Enter'){
        
        li.classList.add('li')
        li.innerHTML = event.target.value
        ol.append(li)
        event.target.value = ''
    }
    li.onclick = function (event){
        li.parentNode.removeChild(event.target)
    }
})

