export const addTodo = (id,text)=>
({
    type: "ADD",
    id: id,
    data:text
})
export const delTodo = (id)=>
({
    type: "DEL",
    id:id
})
export const Toggle = (id)=>
({
    type: "Toggle",
    id:id
})
export const updateTodoText = (id, newText) => ({
    type: 'UPDATE_TODO_TEXT',
    id: id,
    newText: newText
  })
