import React from 'react'
import BlogList from './BlogList.jsx'
import posts from './posts.json'

export default function App() {
  return (
    <div >
      <BlogList posts={posts}/>
    </div>
  )
}
