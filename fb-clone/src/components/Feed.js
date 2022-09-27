import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import user1 from '../img/image_3.jpg'
import user4 from '../img/person_8.jpg'

function Feed() {

  return (
    <div className='feed'>
        
        <StoryReel />
        <MessageSender />
      
        <Post 
          // key={id}
          profilepic={user4}
          image={user1}
          username='Myron Joe'
          timestamp='This is our time'
          message='This Looks Good wow'
        />
        <Post 
          // key={id}
          profilepic={user4}
          username='Kachi Joe'
          timestamp='It is late wow'
          message='This is our time and we must shine'
        />
        
    </div>
  )
}

export default Feed