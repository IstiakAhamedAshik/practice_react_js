import React, { useState } from 'react'

const From = () => {
  const [user, setUser] = useState({ name: '', email: '', pass: '' })

  const { name, email, pass } = user

  const inputUser = (e) => {
    let fieldName = e.target.name
    if (fieldName === 'name') {
      setUser({ name: e.target.value, email, pass })
    } else if (fieldName === 'email') {
      setUser({ name, email: e.target.value, pass })
    } else {
      setUser({ name, email, pass: e.target.value })
    }
    // setUser({ ...user, [e.target.name]: e.target.value })
  }

  const submitInfo = (e) => {
    e.preventDefault()
    console.log(user)
  }
  return (
    <div style={{ margin: '30px', border: '1px solid black', padding: '12px' }}>
      <h1>This is My From Handaling</h1>
      <form action='' onSubmit={submitInfo}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={name}
            required
            onChange={inputUser}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={email}
            required
            onChange={inputUser}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            name='pass'
            value={pass}
            required
            onChange={inputUser}
          ></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default From
