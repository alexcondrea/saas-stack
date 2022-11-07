import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Awesome SaaS Product</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description" content="My awesome saas product" />
      </Head>

      <h1>Welcome to my SaaS product page</h1>
      <p>You should visit the <a href="/app">SaaS App</a>. It's pretty awesome!</p>
    </div>
  )
}
