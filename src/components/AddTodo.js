import React, { useState } from 'react'

export const AddTodo = (props) => {

    const [title,setTitle] =  useState("");
    const [desc,setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Description cannot be blank');
        }else{
            props.addTodo(title,desc);
            setDesc('');
            setTitle('');
        }
        
    }
  return (
    <div className='container my-3 py-3 px-3'>
        <h3 className='px-2'>
            Add Todo
        </h3>
        <form className='col-sm-12 col-md-8 col-lg-6 px-3' onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add  Todo</button>
</form>
    </div>
  )
}
