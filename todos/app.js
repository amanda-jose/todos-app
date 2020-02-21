addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const addToDOM = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
    `

    list.innerHTML += html
}
// put function outside of event listener so that it can be reuseable and call the function inside the event listener 


addForm.addEventListener('submit', e => {
    e.preventDefault()
    const todo = addForm.add.value.trim() 

    if(todo.length){
        addToDOM(todo)
        addForm.reset() // removes the recently typed in todo after adding it the list
    }
    // if the length of the todo is a positive integer, it will evaluate to true.
    // if .length returns 0, 0 is a falsey value and wont return a todo so a todo will not be added to the list

})

//delete todos 

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})

//search

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => {
        return !todo.textContent.toLowerCase().includes(term) //returns todos that DO NOT contain the term
    })
    .forEach((todo) => {
        todo.classList.add('filtered')
    })
    // you want to filter out the ones that match because for the ones that do match you will add a class that will hide the todos (display none)

    Array.from(list.children)
    .filter((todo) => {
        return todo.textContent.toLowerCase().includes(term) //returns todos that DO NOT contain the term
    })
    .forEach((todo) => {
        todo.classList.remove('filtered')
    })
    // no longer want to hide the todos that didnt match the criteria at first, but now do match the criteria as the user backspaces and retypes in the search bar
}

search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase()
    filterTodos(term)
})
