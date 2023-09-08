import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Layout.module.css'
import Layout from '@/components/Layout'
import Counter from '@/components/Counter'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const changeTasks = newTasks => setTasks(newTasks)
  return (
    <>
      <Head>
        <title>Todo App</title>
       
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        <div className={styles.container}>
          <Counter className={styles.list} tasks={tasks}/>
          <Layout tasks={tasks} changeTasks={changeTasks}/>
        </div>
      </main>
    </>
  )
}
