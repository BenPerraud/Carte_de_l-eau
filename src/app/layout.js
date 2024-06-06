import React from 'react'
import Head from 'next/head'
import Footer from "./components/Footer"
import Header from './components/Header'

export const metadata = {
    title: 'TERRA OYA | Économisons l\'eau',
    description: 'Fabrication française et vente d\'oyas d\'arrosage',
  }

export default function RootLayout({children}) {

  function schemaOrg () {
    return {
      __html: `{
        "@context": "http://www.schema.org",
        "@type": "ProfessionalService",
        "name": "La Carte de l'Eau",
        "url": "https://cartedeleau.fr",
        "image": "",
        "description": "La Carte de l'Eau est une application pour permettre aux citoyens de se renseigner sur la situation de l'eau en temps reèl en France",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "13 Rue Principale",
          "addressLocality": "CRISSEY",
          "addressRegion": "Bourgogne",
          "postalCode": "71530",
          "addressCountry": "FRANCE"
        },
        "openingHours": "Mo, Tu, We, Th, Fr 9:00-18:00",
        "contactPoint": {
          "@type": "contactPoint",
          "telephone": "+33 3 45 66 02 21"
        }
      }`
    }
  }
  
    return (
      <html lang="fr">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>LA CARTE DE L'EAU | Économisons l\'eau</title>
          <meta name="title" content="LA CARTE DE L'EAU | Économisons l\'eau" />
          <meta name="description" content="La Carte de l'Eau est une application pour permettre aux citoyens de se renseigner sur la situation de l'eau en temps reèl en France mise à disposition par l'entreprise TERRA OYA" />
          <script type="application/ld+json" dangerouslySetInnerHTML={schemaOrg()} key="product-jsonld" />
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