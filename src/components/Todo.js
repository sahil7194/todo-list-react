import React from 'react'

export const  Todo =({todo, onDelete}) => {
  return (
    <div className='my-2 px-4'>
      <h5 className='mt-2'>
        {todo.title}
      </h5>
      <p className='ps-3'>
        {todo.desc}
      </p>
      <button className="btn  btn-sm btn-danger" onClick={() => {onDelete(todo)}}>
        Delete
        </button>
      
    </div>
  )
}
