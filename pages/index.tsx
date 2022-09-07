import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'

export default function Home() {
  const { container, main, title, description, code, grid, footer } = styles
  return (
    <div className={container}>
      <Head>
        <title>The URL shortener of Ahad Chowdhury</title>
        <meta name="description" content="The URL shortener of Ahad Chowdhury" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={main}>
        <h2 className={title}>
          The URL shortener of <a href="https://www.maacpiash.com">
            <code className={styles.code}>maacpiash</code></a>
        </h2>

        <p className={description}>
          Source code is available at
          <a href="/src">
            <code className={code}>
              pia.sh/src
            </code>
          </a>
        </p>

        <div className={grid}>
          <Card title="Resume" values={['resume', 'cv']} />
          <Card title="Website" values={['website', 'portfolio']} />
          <Card title="GitHub" values={['gh', 'github']} />
          <Card title="Blog" values={['blog', 'techdt', 'technical-date']} />
          <Card title="Packages and images" values={['npm', 'nuget', 'docker']} />
          <Card title="Other links" values={['linkedin', 'kaggle', 'stack-overflow']} />
          <Card title="Social" values={['fb', 'ig', 'tw']} />
          <Card title="Contact" values={['email', 'skype', 'tg']} />
          <Card title="Support me" values={['gh-sponsors', 'patreon', 'paypal', 'coffee']} />
        </div>
      </main>

      <footer className={footer}>
        <a
          href="https://www.maacpiash.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright &copy; 2021 Mohammad Abdul Ahad Chowdhury.
        </a>
      </footer>
    </div>
  )
}
