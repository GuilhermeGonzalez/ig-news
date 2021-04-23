import styles from '../styles/home.module.scss'
import Head from 'next/Head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | ig.news </title>
      </Head>
      <h1 className={styles.title}>
        Hello <span>World</span>
      </h1>
    </>
  )
}
