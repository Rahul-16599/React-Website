import React from 'react'
import Todoitems from './Todoitems'
import Header from './Header'
import Button from './Button'



export default function Todoapp() {
  return (
    
    <div className='todoappdiv'>
        <div className='todo-container'> 
            <Header />
            <Todoitems text= "Eat"/>
            <Todoitems text= "Code"/>
            <Todoitems text= "Work"/>
            <Todoitems text= "Sleep"/>
            <Todoitems text= "Repeat"/>
            < Button />
        </div>
    </div>
  )
}
