import Head from 'next/head'
import Layout from '../components/Layout'



export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Resume</title>
        <meta name="description" content="My NextJS Resume" />
      </Head>


      <Layout home>
        <></>
      </Layout>
 
    </>
  )
}

// export const getStaticProps:GetStaticProps = async() => {
//   // const url = "https://jsonplaceholder.typicode.com/posts"
//   // const res = await fetch(url)
//   // const result = await res.json()
//   // const data: Data = result

//   const data = await (await import('../libs/newAllProjects.json')).default
 
//   console.log(data)
//   return{
//     props: {
//       data
//     }
//   }
// }