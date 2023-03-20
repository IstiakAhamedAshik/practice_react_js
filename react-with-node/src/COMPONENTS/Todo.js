import React from 'react'

const Todo = (props) => {
  const { todo } = props
  return (
    <div>
      <li>{todo}</li>
    </div>
  )
}

export default Todo
