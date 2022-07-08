import React from 'react'
import { useRouter } from 'next/router'
import { getCategoriesPost, getCategories } from "../../services"
import { PostCard, Categories, Loader, Header, Footer } from "../../components"


function CategoryPost({ posts }) {
    
    

    const router = useRouter()

    if (router.isFallback) {
        return <Loader />
    }

    return (
        <>
        

        <div className='container mx-auto px-10 mb-8'>
        <Header/>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-snap-1 lg:col-span-8'>
                    {posts.map((post, index) => (<PostCard key={index} post={post.node} />))}

                </div>
                <div className='col-span-1 lg:col-span-4'>
                    <div className='relative lg:sticky top-8'>
                        <Categories />

                    </div>

                </div>
            </div>
            <Footer/>

        </div>
        </>
    )
}

export default CategoryPost



export async function getStaticProps({ params }) {
    const posts = await getCategoriesPost(params.slug)
    return {
        props: { posts }
    }
}

export async function getStaticPaths() {
    const categories = await getCategories()
    return {
        paths: categories.map(({ slug }) => ({
            params: { slug }
        })),
        fallback: false
    }
}