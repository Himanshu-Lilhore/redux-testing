import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice' 

export default function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    function handleAddition() {
        dispatch(addTodo(input))   // this uses reducers to store value into the store
        setInput('')
    }   

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAddition}>ADD</button>
        </div>
    )
}