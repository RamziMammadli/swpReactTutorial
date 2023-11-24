import React from 'react'
import styles from './style.module.css'
import LogButton from '../buttons/LogButton'
const Header = () => {
    
    const myFunc = () => {
        
    }

  return (
    <div className={styles.container}>
        <h1>Logo</h1>
        <div className={styles.nav}>
           <LogButton text='Ramzi'/> 
           <LogButton text='Ruslan' onClick={myFunc()}/> 
        </div>
    </div>
  )
}

export default Header