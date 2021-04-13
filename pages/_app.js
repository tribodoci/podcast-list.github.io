import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta name="description" content="Encontre podcasts focados em programação, tecnologia, ciências da computação e entretenimento geek." />

                <meta property="og:title" content="Lista de Podcasts - Awesome Podcasts BR" />
                <meta property="og:description" content="Encontre podcasts focados em programação, tecnologia, ciências da computação e entretenimento geek." />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content=" http://www.ogilvieira.com.br/awesome-podcasts-br/assets/img/share.png" />

                <link rel="apple-touch-icon" sizes="57x57" href="./assets/img/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="./assets/img/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="./assets/img/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="./assets/img/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="./assets/img/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="./assets/img/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="./assets/img/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="./assets/img/favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="./assets/img/favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="./assets/img/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="./assets/img/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="./assets/img/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#15984b" />
                <meta name="msapplication-TileImage" content="./assets/img/favicon/ms-icon-144x144.png" />
                <meta name="theme-color" content="#15984b" />

                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <title>Lista de Podcasts - Awesome Podcasts BR</title>
                <link rel="stylesheet" href="assets/css/style.css" />
            </Head>
            <main>
                <Header />
                <Component {...pageProps} />;
            </main>
        </div>
    )
}