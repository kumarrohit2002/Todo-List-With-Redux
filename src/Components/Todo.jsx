import React from 'react'
import AddTodo from './AddTodo';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../redux/slicer/TodoSlice';
import { MdDeleteForever } from "react-icons/md";



const Todo = () => {
const todos=useSelector(state=>state.todos);
const dispatch=useDispatch();

  return (
    <div className="w-[1050px] bg-gray-600 p-1 ">
        <div className="">
            {
                todos.length >0 ?(
                    todos.map((todo)=>(
                        <li key={todo.id} className="m-1 flex justify-between items-center text-3xl rounded-md border-white border-2 text-white p-2">
                            {todo.text}
                            <button className="text-red-500 ml-5  p-1 px-3 rounded-md border"onClick={ ()=>dispatch(removeTodo(todo.id))}><MdDeleteForever />
                            </button>
                        </li> 
                    ))
                ):(
                    <div>No Data</div>
                )
            }
        </div>
    </div>
  )
}

export default Todo;
