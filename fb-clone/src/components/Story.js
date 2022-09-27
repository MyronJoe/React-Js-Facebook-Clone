import React from 'react'
import { Avatar} from '@mui/material';

function Story({image, profilesrc, title}) {
  return (
    <div style={{backgroundImage:`url(${image})`}} className='story'>
    
        <Avatar className='story_avatar' src={profilesrc}/>
        <h4>{title}</h4>
    </div>
  )
}

export default Story