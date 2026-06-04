import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
    <Card user="Ujjawal Bansal" age={18} img="https://plus.unsplash.com/premium_photo-1710962184944-71cab934b562?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card user="Krishn Singh" age={19} img="https://images.unsplash.com/photo-1779464433091-5b7fcd0b7a96?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    

    </div>
  )
}

export default App
