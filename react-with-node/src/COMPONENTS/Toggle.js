import { useState } from 'react'
import Show from './Show'
import './show.css'
const faQuestion = [
  {
    id: '64173194d27e416e0a8c1465',
    about: 'what do you know about monika?',
    name: 'Farjana Yeasmin Monika.',
    desc: 'she is 13 years old .she reads in class 8 .her school name is shondhani scholl and college',
  },
  {
    id: '64173194d27e416e0a8c1466',
    about: 'what do you know about mojahid?',
    name: 'Mojahid Hasan Murad .',
    desc: 'he is good man .Now he start job  in a reputed company. he finished his bechalor degree from daffodil university.he is from nagoan ',
  },
]

const Toggle = () => {
  const [faqs, setFaqs] = useState(faQuestion)
  return (
    <div
      style={{
        margin: '20px',
        padding: '3px',
        border: '1px solid black',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>FAQ..S </h1>
      <div className='mother'>
        <div className='child'>
          {faqs.map((faq) => (
            <Show key={faq.id} faq={faq}></Show>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Toggle
