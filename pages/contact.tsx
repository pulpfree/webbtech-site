import React, { FunctionComponent } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Solutions: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Webbtech - Contact</title>
        <meta name='description' content='Contact' />
      </Head>
      <main>Contact page, uh huh!

        <Link href='/'><a>Home</a></Link>
      </main>
    </>
  )
}

export default Solutions
