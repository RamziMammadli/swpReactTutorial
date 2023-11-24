import React from 'react'

const LogButton = ({text, onClick}) => {
  return (
    <button style={{height: '30px',width: '80px',border: 'none',borderRadius:'7px'}} onClick={onClick}>{text}</button>
  )
}

export default LogButton