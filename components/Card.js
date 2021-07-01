import React from 'react'
import styles from '../styles/Card.module.css'

export default function Card(props) {
  const { title, values } = props
  return (
    <a className={styles.card} href={"/" + values[0]}>
      {title && (<h2>{title}</h2>)}
      <p>
        {values.map(value => (
          <div key={value}>
            <a href={"/" + value}>
              <code className={styles.url}>
                pia.sh/{value}
              </code>
            </a>
            <br />
          </div>
        ))}
      </p>
    </a>
  )
}
