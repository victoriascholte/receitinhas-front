import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Button from "../components/Button";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter()
    return (
    <>
        <Head>
            <title>Receitinhas</title>
            <meta name='description' content='Receitas saudáveis que cabem no bolso' />
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main} >
            <Wrapper>
                <Header page={'landingPage'}></Header>
                  <div className={styles.hero}>
                    <div className={styles.banner}>
                        <h1>Aprenda receitas saudáveis que cabem no bolso</h1>
                        <p>Aqui você encontra receitas para garantir a nutrição e segurança alimentar dos seus filhos.</p>
                        <Button onClick={() => router.push('/recipes')}>Ver receitas</Button>
                    </div>
                  <div className={styles.image}>
                      <Image src={'/cat-cooking-banner.png'} alt='Cat cooking' width={400} height={480}/>
                  </div>
                  </div>
              <footer className={styles.footer}>
                <p>Victoria Scholte - Projeto Final - Reprograma</p>
              </footer>
            </Wrapper>
        </main>
    </>
  )
}
