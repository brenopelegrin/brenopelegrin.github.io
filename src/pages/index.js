import { Link } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.perfil}><img src="/breno.png" alt="Breno Henrique da Silva"></img></div>
        <section className={styles.corpo}>
          <h1>Oi, eu sou o Breno.</h1>
          <h2>Um graduando do Bacharelado em Física Computacional na USP (IFSC).</h2>
          <h3>Sou Técnico em <b><span class="blue">Mecatrônica</span></b> formado pelo Instituto Federal de São Paulo, Câmpus Catanduva.</h3>
          <h3>Neste site, você poderá ver o meu <b><span class="blue">currículo</span></b> acadêmico e profissional, 
          assim como os <b><span class="blue">projetos</span></b> que desenvolvi e outras produções em meu <b><span class="blue">blog.</span></b></h3>
          <div className={styles.social}>
            <Link to="https://instagram.com/brenopelegrin"><i class="fab fa-instagram fa-2x"></i></Link>
            <Link to="https://facebook.com/brenopelegrin"><i class="fab fa-facebook fa-2x"></i></Link>
            <Link to="https://linkedin.com/in/brenopelegrin"><i class="fab fa-linkedin fa-2x"></i></Link>
            <Link to="https://github.com/brenopelegrin"><i class="fab fa-github fa-2x"></i></Link>
          </div>
        </section>
      </section>
    </Layout>
  )
}
