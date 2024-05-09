import React from 'react'

const BlogPost=({post})=> {
  return (
    <div className=' bg-slate-200 flex-col my-2 rounded-lg'>
        <h2 className='text-2xl text-slate-500 font-semibold p-4'>{post.title}</h2>
        <p className=' text-xl text-slate-500 p-4'>{post.content}</p>
    </div>
  )
}
export default BlogPost