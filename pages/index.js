import Head from "next/head"


import { PostCard, Categories, PostWidget, Header, Footer } from '../components'
import { getPosts } from "../services"



export default function Home({posts}) {

  
  return (
    <div className='container mx-auto px-5 mb-4'>
      <Head>
        <title>Ostturkestan Official Page </title>
        <link rel='icon' href='/ostturkestan-logo-blue.png' />
      </Head>
      <Header />
    
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map(
            (post, index) => (
              <PostCard post={post.node} key={index} />
            )
          )}
        </div>


        <div className="lg:col-span-4 col-span-1">
          <div className="bottom-4 lg:sticky relative top-8">
            <PostWidget />
            <Categories/>

          </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  const posts=(await getPosts())||[]
  return {
    props:{posts}
  }
}