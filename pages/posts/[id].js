import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  console.log(postData)
  return (
    <Layout>
      <Head>
        <title>{postData?.title}</title>
      </Head>
      {/* {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date}/>

      <div
        dangerouslySetInnerHTML={{
          __html: postData.contentHtml
        }}
      /> */}

      <article>
        <h1 className={utilStyles.headingXl}>{postData?.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData?.date} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: postData?.contentHtml }}
        />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}

//  Just learn concept getStaticPathProps
// export default function Post({ params }) {
//   return <h2>{params.id}</h2>
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         id: 2
//       },
//       false
//     ]
//   }
// }

// export async function getStaticProps({ params }) {
//   return {
//     props: {
//       params: id
//     }
//   }
// }
