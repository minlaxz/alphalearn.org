import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@/components/button'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Alpha Learn</title>
                <meta name="description" content="Alpha Learn, a new learning platform." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h3>Hello, world!</h3>
                <small>Testing absolute import !!</small>
                <Button />
            </main>


        </div>
    )
}
