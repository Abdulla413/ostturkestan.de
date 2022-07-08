import moment from "moment"
import Link from "next/link"
import React from "react"
import {useState, useEffect}from "react"
import {getRecentPosts, getSimilarPosts} from "../services"


function PostWidget({categories, slug}) {
  
  const [relatedPosts, setRelatedPosts]=useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug, categories]);


  return (

    <div className="bg-gray-200 text-black shadow-lg rounded-lg p-4 my-4">
     <h3 className="text-xl text-white text-center bg-gray-800 rounded-lg m-4 font-semibold p-4 uppercase">
      {slug ? "zusammenhängende posts" : "Kürzliche Posts"}
    </h3>
     {relatedPosts.map((post)=>(
     <div key={post.title} className="flex items-center w-full mb-4">
        
      <div className="w-16 flex-none">
         <img  
        alt={post.title}
        height="60px"
        width="60px"
        className="align-middle rounded-full"
        src={post.featuredImage.url}
        />


      </div>
      <div className="flex-grow ml-4">
        <p className="text-gray-600 font-xs">
          {moment(post.createAt).format("DD MM, YYYY")}

        </p>
        <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
          {post.title}
        </Link>



      </div>
      
      </div>))}
   


    </div>
  )
}

export default PostWidget