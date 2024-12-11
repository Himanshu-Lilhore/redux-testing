import { useSelector, useDispatch } from "react-redux";

export default function ViewTodos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <div>
            <div>Todos :</div>
            {todos.map((todo) => {
                return <div key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </div>
            })}
        </div>
    )
}