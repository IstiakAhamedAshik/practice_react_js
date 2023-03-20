import React, { useState } from 'react'

const Todofrom = (props) => {
  const { addTodo } = props
  const [input, setInput] = useState('')
  const inputfield = (e) => {
    let inputField = e.target.value
    setInput(inputField)
  }
  const submitt = (e) => {
    e.preventDefault()
    addTodo(input)
  }
  return (
    <div>
      <form action='' onSubmit={submitt}>
        <input type='text' onChange={inputfield} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Todofrom
