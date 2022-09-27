import React from 'react'
import { Avatar } from '@mui/material';


function SiderbarRow({title, Icon, src}) {
  return (
    
    <div className='sidebar__row'>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
  )
}

export default SiderbarRow