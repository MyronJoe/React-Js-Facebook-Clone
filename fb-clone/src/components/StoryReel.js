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
            image='https://scontent.fenu1-1.fna.fbcdn.net/v/t1.6435-9/106494344_1593152077526839_1194996090190141473_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=u1wGs27kSTEAX-mkM-U&tn=xzoBoIPHwqGeuQdX&_nc_ht=scontent.fenu1-1.fna&oh=00_AT-XCb7G1Uc-fiGfs_6ReSvJMhvQeoRmg1Q5DHUky51-eg&oe=6356F1F3'
            
            profilesrc='https://scontent.fenu1-1.fna.fbcdn.net/v/t1.6435-9/106494344_1593152077526839_1194996090190141473_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=u1wGs27kSTEAX-mkM-U&tn=xzoBoIPHwqGeuQdX&_nc_ht=scontent.fenu1-1.fna&oh=00_AT-XCb7G1Uc-fiGfs_6ReSvJMhvQeoRmg1Q5DHUky51-eg&oe=6356F1F3'

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