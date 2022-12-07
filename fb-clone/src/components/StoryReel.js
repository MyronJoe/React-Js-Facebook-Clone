import React from 'react'
import Story from './Story'
import './StoryReel.css'
import user1 from '../img/image_3.jpg'
import user2 from '../img/image_6.jpg'
import user3 from '../img/person_4.jpg'
import user4 from '../img/person_8.jpg'
import user5 from '../img/practice-1.jpg'

function StoryReel() {
  return (
    <div className='story__reel'>
        <Story 
            image={user4}
            
            profilesrc={user4}

            title='Myron Joe'
        />
        <Story 
            image={user2}
            
            profilesrc={user1}

            title='Austine Amason'
        />
        <Story className='remover'
            image={user3}
            
            profilesrc={user3}

            title='Jenny Anthonia'
        />
        <Story 
            image={user4}
            
            profilesrc={user4}
            title='Paschal Amaka'
        />
        <Story 
            image={user5}
            
            profilesrc={user5}

            title='Viviana Epueke'
        />
    </div>
  )
}

export default StoryReel