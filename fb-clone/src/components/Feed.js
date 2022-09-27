import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'

function Feed() {
  return (
    <div className='feed'>
        
        <StoryReel />
        <MessageSender />
      
        {/* <h1>Comments</h1> */}
    </div>
  )
}

export default Feed