import { Link } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <img src="/breno.png" alt="Breno Henrique da Silva"></img>
          <h1>Oi, eu sou o Breno.</h1>
          <h2>Um graduando do Bacharelado em Física Computacional na USP (IFSC)</h2>
          <p>Sou Técnico em Mecatrônica formado pelo Instituto Federal de São Paulo, Câmpus Catanduva.</p>
          <p>Neste site, você poderá ver o meu <b>currículo</b> acadêmico e profissional, assim como os <b>projetos</b> que desenvolvi e outras produções em meu <b>blog.</b></p>
          <Link className={styles.btn_icon} to="https://instagram.com/brenopelegrin"><i class="fa fa-instagram fa-2x"></i></Link>
          <Link className={styles.btn_icon} to="https://facebook.com/brenopelegrin"><i class="fa fa-facebook fa-2x"></i></Link>
          <Link className={styles.btn_icon} to="https://linkedin.com/in/brenopelegrin"><i class="fa fa-linkedin fa-2x"></i></Link>
          <Link className={styles.btn_icon} to="https://github.com/brenopelegrin"><i class="fa fa-github fa-2x"></i></Link>
        </div>
      </section>
    </Layout>
  )
}
