import React from 'react'
import BlogPost from './BlogPost.jsx'

const BlogList=({posts})=>{
  return (
    <div className=' items-center p-6 flex-col m-auto my-10 bg-zinc-400 sm:w-[900px] w-[500px] rounded-xl '>
        <h1 className='text-4xl text-slate-600 font-bold text-center'>Blog Posts</h1>
        <ul>
            {posts.map((post,key)=>(
                <li key={key}>
                    <BlogPost post={post}/>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default BlogList;