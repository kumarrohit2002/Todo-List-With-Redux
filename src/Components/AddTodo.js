import React, { useState } from 'react';

import { addTodo } from '../redux/slicer/TodoSlice';
import { useDispatch } from 'react-redux';


const AddTodo = () => {
    const [input,setInput]=useState('');
    const dispatch = useDispatch();
const addTodoHendeler=(e)=>{
    e.preventDefault();
    try{
        if(input!==''){
        dispatch(addTodo(input));
        console.log("AddTodo");
        setInput('');
    }else{
        alert('All flied Are Required!');
    }

    }catch(error){
        console.log(error.message);
    }
}

  return (
    <div>
        <form onSubmit={addTodoHendeler}>
            <input className='border border-black w-[650px] p-2 rounded text-white bg-slate-600' type="text" value={input} placeholder='Enter Your Text' onChange={(e)=>{setInput(e.target.value);
                console.log(e.target.value)
            }}/>
            <button type='submit' className='p-1 px-3 m-5 bg-blue-500 rounded-md'>AddTodo</button>
        </form>
    </div>
  )
}

export default AddTodo;