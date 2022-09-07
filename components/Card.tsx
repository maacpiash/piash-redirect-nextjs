import styles from '../styles/Card.module.css'

interface CardProps {
  title: string
  values: string[]
}

export default function Card({ title, values }: CardProps) {
  const { card, url } = styles
  return (
    <a className={card} href={"/" + values[0]}>
      {title && (<h2>{title}</h2>)}
      <p>
        {values.map(value => (
          <div key={value}>
            <a href={"/" + value}>
              <code className={url}>
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
