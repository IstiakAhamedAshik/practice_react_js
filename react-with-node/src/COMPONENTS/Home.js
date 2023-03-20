import React, { useState } from 'react'
import Todo from './Todo'

import Todofrom from './Todofrom'
const todoss = ['ashik', 'Monika']
const Home = () => {
  const [todos, setTodo] = useState(todoss)
  const addTodo = (gettodo) => {
    let getvalue = [...todos, gettodo]
    setTodo(getvalue)
  }
  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid black' }}>
      <h1>create todo</h1>
      <Todofrom addTodo={addTodo}></Todofrom>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo}></Todo>
      ))}
    </div>
  )
}

export default Home
