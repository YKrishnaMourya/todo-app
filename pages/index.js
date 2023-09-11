import Head from 'next/head'
import styles from '@/styles/Layout.module.css'
import Layout from '@/components/Layout'
import Counter from '@/components/Counter'


export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
       
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        <div className={styles.container}>
          <Counter className={styles.list}/>
          <Layout/>
        </div>
      </main>
    </>
  )
}
