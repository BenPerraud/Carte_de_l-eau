import React from 'react'
import Head from 'next/head'
import Footer from "./components/Footer"
import Header from './components/Header'

export const metadata = {
    title: 'CARTE DE L\'EAU | L\'eau sous toutes ses formes',
    description: 'S\'informer sur l\'eau en France de manière ludique et intéractive',
  }

export default function RootLayout({children}) {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    "headline": "LA CARTE DE L'EAU | L'eau sous toutes ses formes",
    "name": "LA CARTE DE L'EAU | L'eau sous toutes ses formes",
    "description" : "La Carte de l'Eau est une application pour permettre aux citoyens de se renseigner sur la situation de l'eau en temps réèl"
  }
  
    return (
      <html lang="fr">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>LA CARTE DE L'EAU | Économisons l\'eau</title>
          <meta name="title" content="LA CARTE DE L'EAU | L'eau sous toutes ses formes" />
          <meta name="description" content="La Carte de l'Eau est une application pour permettre aux citoyens de se renseigner sur la situation de l'eau en temps réèl en France" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} key="product-jsonld" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
            <Header />
            {children}
            <Footer />
        </body>
      </html>
    )
  }