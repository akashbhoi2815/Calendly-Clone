import React from 'react'
import styles from './Demo.module.css';

export const Demo = () => {
  return (
    <div>
        <nav className={styles.container}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>Login</div>
                <div>signup</div>
                <div>Home</div>
                <div>Details</div>
                <div>Products</div>
            </div>
        </nav>
    </div>
  )
}
