import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anthony Fiset</title>
        <meta name="description" content="Anthony Fiset's Personal Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Hero */}

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
        </div>

  )
}
