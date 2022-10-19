import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/404.module.css"

export default function Error404() {
  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.centro}>
          <h1>Erro 404</h1>
          <h2>Ops... A página não foi encontrada :(</h2>
          <img className={styles.robo} src="/broken-robot.png" alt="Robô quebrado"></img>
        </div>
      </section>
    </Layout>
  )
}
