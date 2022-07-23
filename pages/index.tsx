import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Receitinhas</title>
        <meta name='description' content='Receitas saudáveis que cabem no bolso' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <header>
            <Image src={'/receitinhas-favicon.svg'} alt='Receitinhas Logo' width={500} height={610}/>
            <nav>
                <ul>
                  <li><a>Receitas</a></li>
                  <li><a>Contato</a></li>
                </ul>
            </nav>
        </header>
        <div>
            <div>
              <h1>Aprenda receitas saudáveis que cabem no bolso</h1>
            <p>Aqui você encontra receitas para garantir a nutrição e segurança alimentar dos seus filhos.</p>
            <button>Ver receitas</button>
            </div>
            <Image src={'/cat-cooking-banner.png'} alt='Cat cooking' width={500} height={500}/>
        </div>
      </main>
      <footer>
        <p>Victoria Scholte - Projeto Final - Reprograma</p>
      </footer>
    </div>
  )
}
