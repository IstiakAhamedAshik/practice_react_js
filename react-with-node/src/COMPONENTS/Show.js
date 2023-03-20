import React, { useState } from 'react'
import './show.css'
const Show = (props) => {
  const [togle, setTogle] = useState(false)
  const { about, name, desc } = props.faq
  return (
    <div className='aboutYourself'>
      <div className='about'>
        <h3>{about}</h3>
        <button onClick={() => setTogle(!togle)}>ShowAns</button>
      </div>
      {togle && (
        <div className='name'>
          <h4>Name : {name}</h4>
          <h5>About : {desc}</h5>
        </div>
      )}
    </div>
  )
}

export default Show
