import React from 'react'
import { FaTrash } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTrash style={{ color: '#A71D31', cursor:'pointer' }} onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
            
        </div>
    )
}

export default Task
