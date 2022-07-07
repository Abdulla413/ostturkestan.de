import React from 'react'
import {getPosts, getPostDetails} from "../../services"
import {PostDetail, Categories, PostWidget, Autor, Comments, CommentsForm, Layout} from "../../components"


function PostDetails({post}) {
  console.log(post, "iam post nime gap")
  return (
    
    <Layout className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post}/>
          <Autor autor={post.autor}/>
          <CommentsForm slug={post.slug}/>
          <Comments slug={post.slug}/>
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <PostWidget />
            <Categories/>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default PostDetails


export async function getStaticProps({params}){
  const data=await getPostDetails(params.slug)
  console.log(data, "i am post at home")

  return {
    props:{post:data}
  }
}

export async function getStaticPaths(){
  const posts=await getPosts()
  return {
    paths:posts.map(({node:{slug}})=>({
      params:{slug}
    })),
    fallback:false
  }
}