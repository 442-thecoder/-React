const initialstate = {
    todos:[]
}
const todoReducer = (state = initialstate, action) => {
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          todos: [...state.todos, {
            id: action.id,
            text: action.data
          }]
        };
      case 'DEL':
        return {
          ...state,
          todos: state.todos.filter((t) => t.id !== action.id)
        };
      case 'UPDATE_TODO_TEXT':
        return {
          ...state,
          todos: state.todos.map((todo) => 
            todo.id === action.id ? { ...todo, text: action.newText } : todo
          )
        };
      default:
        return state;
    }
  };
export default todoReducer;