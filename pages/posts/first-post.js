import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
        <link
          rel="shortcut icon"
          href="/images/nextjs.svg"
          type="image/x-icon"
        />
      </Head>
      <Script
        src="https://connect.facebook.net/un_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(
            `script loaded correctly, window.FB has been populated`
          )
        }
      />
      <h1> First Post</h1>
      <Image
        src="/images/example.jpg"
        width={144}
        height={144}
        alt="example image from using component Image"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}
