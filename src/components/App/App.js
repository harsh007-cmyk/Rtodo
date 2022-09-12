import React from 'react'
import List from '../Util/List'
import Use from '../Util/useeffect'
const bodyContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding:'10px',
    backgroundColor: '#282c34',
}

const todoListContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'aqua',
    borderRadius: '10px',
    width: '600px',
    boxShadow: '0 0 10px 0 rgba(255,255,255,.5',
}



function App() {
  return (
    <div style={bodyContainer}>
        <div style={todoListContainer}>
            <h1>Todo List</h1>
            <List/>
            
        </div>
    </div>
  )
}

export default App