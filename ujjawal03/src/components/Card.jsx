import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
    <div className="card">  
      <img src={props.img} alt="" />
      <h1>{props.user}</h1>
      <p>Hi, Everyone <br />I am {props.age} years old. </p>
      <button>View Profile</button>
    </div>
  )
}

export default Card
