import React from 'react'
import Layout from "../../components/Layout"
import * as styles from "../../styles/blog.module.css"

export default function blogIndex() {
  return (
      <Layout>
          <div>
            <main className={styles.cards}>
                <section className={styles.card}>
                <img src="https://www.projetodraft.com/wp-content/uploads/2021/09/pexels-markus-spiske-965345.jpg" alt="t"></img>
                    <h3>Teste um dois tres</h3>
                    <span>Testandooo</span>
                    <button>Ver mais</button>
                </section>
                <section className={styles.card}>
                    <img src="https://www.projetodraft.com/wp-content/uploads/2021/09/pexels-markus-spiske-965345.jpg" alt="t"></img>
                    <h3>Teste um dois tres</h3>
                    <span>Testandooo</span>
                    <button>Ver mais</button>
                </section>
                <section className={styles.card}>
                <img src="https://www.projetodraft.com/wp-content/uploads/2021/09/pexels-markus-spiske-965345.jpg" alt="t"></img>
                    <h3>Teste um dois tres</h3>
                    <span>Testandooo</span>
                    <button>Ver mais</button>
                </section>
                <section className={styles.card}>
                <img src="https://www.projetodraft.com/wp-content/uploads/2021/09/pexels-markus-spiske-965345.jpg" alt="t"></img>
                    <h3>Teste um dois tres</h3>
                    <span>Testandooo</span>
                    <button>Ver mais</button>
                </section>
                <section className={styles.card}>
                <img src="https://www.projetodraft.com/wp-content/uploads/2021/09/pexels-markus-spiske-965345.jpg" alt="t"></img>
                    <h3>Teste um dois tres</h3>
                    <span>Testandooo</span>
                    <button>Ver mais</button>
                </section>
                <section className={styles.card}>
                <img src="https://www.projetodraft.com/wp-content/uploads/2021/09/pexels-markus-spiske-965345.jpg" alt="t"></img>
                    <h3>Teste um dois tres</h3>
                    <span>Testandooo</span>
                    <button>Ver mais</button>
                </section>
            </main>
          </div>
      </Layout>
  )
}
